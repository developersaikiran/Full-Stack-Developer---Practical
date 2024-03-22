const express = require("express");
const router = express.Router();
const { AuthModule } = require("../../../controllers")
const authCtrl = new AuthModule.AuthCtrl.AuthController()

router.post("/login", async (req, res)=>{
    const result = await authCtrl.login(req);
    res.status(result.status).send(result);
})

router.post("/registration", async (req, res)=>{
    const result = await authCtrl.login(req);
    res.status(result.status).send(result);
})

router.post("/send-otp", async (req, res)=>{
    const result = await authCtrl.login(req);
    res.status(result.status).send(result);
})


module.exports = router