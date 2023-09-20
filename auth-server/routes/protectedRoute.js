const express = require("express");
const auth = require("../middlewares/auth");


const router = express.Router();

router.get("/",auth,(req,res)=>{
    res.status(200).send("Welcome,Authorized User!,Your Creds Are : "/*,req.currentUser.email  ---->TO BE FIXED */);
})

module.exports = router;