const { db } = require("../../models")
const { responses } = require("../../responses")

class AuthController {
    constructor(){

    }

    // login buyer/seller
    async login(){
        try{
            const findUser = await db.users.find()
            if(findUser){
                return responses.success("user found successful", findUser);
            }else{
                return responses.badRequest("User not found", {});
            }
        }catch(err){
            return responses.serverError("Something went wrong", {}, err.message);
        }
    }
}

module.exports = { 
    AuthController
} 