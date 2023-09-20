const User = require("../db/models/user-auth");
// const hashData = require("../utils/hash-password");
const {verifyHashedData} = require("../utils/hash-password");
const createToken = require("../utils/createToken")

async function authenticateUser(data) {
    try {
        const {email,password} = data;

        const fetchedUser = await User.findOne({
            email
        });

        if(!fetchedUser) {
            throw new Error("Invalid Creds!");
        }
        
        const hashedPassword = fetchedUser.password;
        const passwordMatch = await verifyHashedData(password,hashedPassword);

        if(!passwordMatch) {
            throw new Error("Invalid Password Entered!");
        }
        
        //create user token:
        const tokenData ={userId: fetchedUser._id,email};
        const token = await createToken(tokenData);

        fetchedUser.token = token;
        return fetchedUser;

    }catch(e) {
        console.log(e.message);
    }
}

module.exports = authenticateUser;