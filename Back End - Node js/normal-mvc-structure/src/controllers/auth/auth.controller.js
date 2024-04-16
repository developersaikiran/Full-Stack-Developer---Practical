const { db } = require("../../models")
const { responses } = require("../../responses")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const saltRounds = 10;
const tokenSecretKey = process.env["JWT_SECRET_" + process.env.RUN_MODE];

class AuthController {
    constructor() {

    }

    // login buyer/seller
    async login(req) {
        try {
            const {
                email,
                password
            } = req.body;
            const findUser = await db.users.findOne({
                email: email
            })
            if (findUser) {
                if(bcrypt.compareSync(password, findUser.password)){
                    let tokenData = {
                        userId: findUser._id,
                        email: findUser.email
                    }
                    const token = await jwt.sign(tokenData, tokenSecretKey, {})
                    return responses.badRequest("incorrect password entered", {token});
                }else{
                    return responses.badRequest("incorrect password entered", {});
                }
            } else {
                return responses.badRequest("User not found", {});
            }
        } catch (err) {
            return responses.serverError("Something went wrong", {}, err.message);
        }
    }

    // registration buyer/seller
    async registration(req) {
        try {
            const {
                email,
                password,
                otp
            } = req.body;

            let hashPassword = await bcrypt.hash(password, saltRounds).then(hash => {
                console.log('Hash 1232', hash);
                return hash
            }).catch(err => {
                console.error(err.message)
                return null
            })

            if(!hashPassword){
                return responses.serverError("Failed to generate hash", {});
            }


            const findUser = await db.users.findOne({
                email: email
            })
            if (findUser) {
                return responses.badRequest("User already exists with this mail Id", {});
            } else {
                const createUser = await db.users.create({
                    email: email,
                    password: hashPassword,
                })

                if(createUser){
                    return responses.success("user found successful", createUser);
                }
                return responses.serverError("Something went wrong", {});
            }
        } catch (err) {
            return responses.serverError("Something went wrong", {}, err.message);
        }
    }

    // Get details of buyer/seller
    async details() {
        try {
            const findUser = await db.users.find()
            if (findUser) {
                return responses.success("user found successful", findUser);
            } else {
                return responses.badRequest("User not found", {});
            }
        } catch (err) {
            return responses.serverError("Something went wrong", {}, err.message);
        }
    }
}

module.exports = {
    AuthController
} 