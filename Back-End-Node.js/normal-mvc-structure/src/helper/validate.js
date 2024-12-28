const { responses } = require("../responses");

const HOST = process.env.HOST;
const RUN_MODE = process.env.RUN_MODE;

const joiValidate = (schema) => {
    return (request, response, next) => {
        let { error } = schema.validate(request.body ? request.body : {});
        const valid = error = null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(",")
            const key = details.map((i) => i.context.key).join(",")
            if (HOST == "live" && RUN_MODE == "PROD") {
                response.status(422).json(
                    responses.validationError("", {
                        validationKey: key,
                        validationMessage: message,
                    })
                );
            } else {
                response.status(422).json(
                    responses.validationError("", {
                        validationKey: null,
                        validationMessage: "Validation failed",
                    })
                );
            }
        }
    }
}

module.exports = {
    joiValidate
}