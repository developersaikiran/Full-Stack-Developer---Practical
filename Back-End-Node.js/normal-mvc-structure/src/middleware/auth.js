const { db } = require("../models");
const jwt = require("jsonwebtoken");
const { responses } = require("../responses");

const tokenSecretKey = process.env["JWT_SECRET_" + process.env.RUN_MODE];
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const checkRequest = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send(responses.invalidToken("No token provided", {}));
    }
    const parts = authorization.split(" ");
    if (parts.length != 2) {
        return res.status(401).send(responses.invalidToken("Token error", {}));
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send(responses.invalidToken("Token malformated", {}));
    }
    
    try{
        const decode = jwt.verify(token, tokenSecretKey);
        if (decode) {
            req.headers.tokenPayload = decode;
            return true;
        }else{
            return false;
        }
    } catch (error) {
        return res.status(401).send(responses.invalidToken("Invalid token", {}));
    }
}

const checkAuthUser = (roles) => {
    try {
        return async (req, res, next) => {
            const result = await checkRequest(req, res, next);
            if(result){
                console.log({result});
                if (result == true) {
                    if (!roles || roles.length == 0) {
                        next()
                    } else {
                        const { tokenPayload } = req.headers;
                        if(tokenPayload && tokenPayload.userId){
                            const userRole = db.userRole.aggregate([
                                {
                                    $lookup: {
                                        from: 'roles',
                                        localField: '_id',
                                        foreignField: 'roleId',
                                    }
                                },
                                {
                                    $match: {
                                        userId: ObjectId(tokenPayload.userId)
                                    }
                                }
                            ])
                            return res.status(409).send(responses.failAuthorization("Invalid Token", userRole, {}));
                        }else{
                            return res.status(409).send(responses.failAuthorization("Invalid Token", {}, ""));
                        }
                    }
                } else {
                    return res.status(403).send(responses.invalidToken("Forbidden", {}))
                }
            } else {
                return res.status(403).send(responses.invalidToken("Forbidden", {}));
            }
        }
    } catch (err) {
        return async (req, res, next) => {
            return res.status(409).send(responses.failAuthorization("Invalid Token", null, err.message));
        }
    }
}


module.exports = {
    checkAuthUser
}