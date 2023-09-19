const express = require("express");
const { default: User } = require("../db/models/user-auth");
const hashData = require("../utils/hash-password");
const createNewUser = require("../controllers/createUser");
const router = express.Router();


router.post("/",async function(req,res){
    console.log("CCC")
    try {
        let {name,email,password} = req.body;
        name = name.trim();
        email = email.trim();
        password = password.trim();
        console.log(`name: ${name},pass: ${password},email: ${email}`)
        if(!(name && email && password)) throw new Error("Empty Input Fields");
        else if(!/^[a-zA-Z-' ]+$/.test(name)) throw new Error("Invalid Name Entered");
        // else if()
        else if(password.length<8) throw new Error ("Too Short Password!");
        else {
            /**
             * Good Creds
             */
            const newUser = await createNewUser( {
                name,
                email,
                password
            })
            if(newUser.statusCode ===undefined) 
                res.status(200).json(newUser);
            else 
                res.status(newUser.statusCode).json(newUser.error);
            }
    } catch (error) {
        res.status(404).json(error.message);
    }
})

module.exports = router;