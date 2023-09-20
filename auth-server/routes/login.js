const express = require("express");
const authenticateUser = require("../controllers/authenticateUser");
const router = express.Router();


router.post("/", async function (req, res) {
    try {
        let { email, password } = req.body;
        email = email.trim();
        password = password.trim();

        if (!(email && password)) {
            throw new Error("Undefined States!")
        }

        const authenticatedUser = await authenticateUser({email,password});
        
        res.status(200).json(authenticatedUser);
    } catch (error) {
        res.json(404).json(error.message);
    }
})

module.exports = router;