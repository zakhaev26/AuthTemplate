const express = require("express");
const { default: User } = require("../db/models/user-auth");
const hashData = require("../utils/hash-password");
const createNewUser = require("../controllers/createUser");
const error = require("../errors/error");
const authenticateUser = require("../controllers/authenticateUser");
const router = express.Router();


router.post("/",async function(req,res){

    try {
        let {email,password} = req.body;
        email = email.trim();
        password = password.trim();

        if(!(email&&password)) {
            error.statuscode = 404;
            error.message = "Empty Credentials!"
            res.status(404).json(error);
        }
        const fetchedUser = await authenticateUser({
            email,password
        });

        if(fetchedUser.statuscode!==404) {
            console.log("JII")
            console.log(fetchedUser);
            res.status(200).json(fetchedUser);
        }
        else {
            res.status(fetchedUser.statuscode).json(fetchedUser)
        }
    } catch (error) {
        
    }
})

module.exports = router;