const Joi = require("joi");

const authValidate = {
    login: Joi.object().keys({
        email: Joi.string().email().required().messages({
            "any.required": "Email is mandatory",
            "string.empty": "Email is mandatory",
            "string.email": "Email is invalid",
        }),
        password: Joi.string().required().messages({
            "any.required": "Password is mandatory.",
            "string.empty": "Password is mandatory",
        }),
    })
}

module.exports = {
    authValidate
}