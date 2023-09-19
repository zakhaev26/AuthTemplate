const User = require("../db/models/user-auth");
const hashData = require("../utils/hash-password");

async function createNewUser(data) {
    try {
        const { name, email, password } = data;
        const hpassword = await hashData(password);
        console.log("pass:",hpassword)
        const existing_user = await User.findOne({email});
        if (existing_user){
            return {
                "status":404,
                "error":"User Exists"
            }
        }
        else {
            const newUser = new User({
                name,
                email,
                password:hpassword
            });

            const createdUser = await newUser.save(newUser);
            return createdUser;
        }
    } catch (err) {
            return {
                "status":404,
                "error":`${err.message}`
            }
    }
}

module.exports = createNewUser;