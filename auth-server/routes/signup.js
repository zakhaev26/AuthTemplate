const express = require("express");
const createNewUser = require("../controllers/createUser");
const router = express.Router();


router.post("/",async function(req,res){
    try {
        let {name,email,password} = req.body;
        name = name.trim();
        email = email.trim();
        password = password.trim();
        if(!(name && email && password)) throw new Error("Empty Input Fields");
        else if(!/^[a-zA-Z-' ]+$/.test(name)) throw new Error("Invalid Name Entered");
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

            if(newUser) 
                res.status(200).json(newUser);
            else 
                res.status(404).json("User Not Created. @routes/singup.js");
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
})

module.exports = router;