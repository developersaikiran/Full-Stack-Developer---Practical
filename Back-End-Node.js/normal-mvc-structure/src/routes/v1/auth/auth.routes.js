const express = require("express");
const router = express.Router();
const { AuthModule } = require("../../../controllers");
const { joiValidate } = require("../../../helper/validate");
const { authValidate } = require("../../../validators/auth.validator");
const { checkAuthUser } = require("../../../middleware/auth");
const authCtrl = new AuthModule.AuthCtrl.AuthController()

router.post("/login",
// joiValidate(authValidate.login),
async (req, res)=>{
    const result = await authCtrl.login(req);
    res.status(result.status).send(result);
})

router.post("/registration",
// checkAuthUser(['user']), 
async (req, res)=>{
    const result = await authCtrl.registration(req);
    res.status(result.status).send(result);
})

router.post("/send-otp", async (req, res)=>{
    const result = await authCtrl.login(req);
    res.status(result.status).send(result);
})

router.get("/details", async (req, res)=>{
    const result = await authCtrl.details(req);
    res.status(result.status).send(result);
})


module.exports = router