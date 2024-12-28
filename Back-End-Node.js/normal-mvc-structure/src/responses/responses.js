function success(message="", data){
    return {
        status: 200,
        success: true,
        message: message,
        data: data,
    }
}

function badRequest(message="", data, err=""){
    return {
        status: 400,
        success: false,
        message: message,
        data: data,
        error: err
    }
}

function notFound(message="", data){
    return {
        status: 404,
        success: false,
        message: message,
        data: data,
    }
}

function validationError(message="", data, err = ""){
    return {
        status: 422,
        success: false,
        message: message,
        data: data,
        error: err,
    }
}

function serverError(message="", data, err = ""){
    return {
        status: 500,
        success: false,
        message: message,
        data: data,
        error: err,
    }
}

function failAuthorization(message="", data, err = ""){
    return {
        status: 400,
        success: false,
        message: message,
        data: data,
        error: err,
    }
}

function forbidden(message="", data, err = ""){
    return {
        status: 403,
        success: false,
        message: message,
        data: data,
        error: err,
    }
}

function conflictError(message="", data, err = ""){
    return {
        status: 409,
        success: false,
        message: message,
        data: data,
        error: err,
    }
}

function invalidToken(message="", data, err = ""){
    return {
        status: 401,
        success: false,
        message: message,
        data: data,
        error: err,
    }
}

module.exports = {
    success,
    badRequest,
    notFound,
    validationError,
    serverError,
    failAuthorization,
    forbidden,
    conflictError,
    invalidToken,
}