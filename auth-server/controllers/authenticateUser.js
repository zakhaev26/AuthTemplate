const User = require("../db/models/user-auth");
const hashData = require("../utils/hash-password");
const error = require("../errors/error")
async function authenticateUser(data) {
    try {
        const {email,password} = data;

        const fetchedUser = await User.findOne({
            email
        });

        if(!fetchedUser) {
            error.statuscode = 404;
            error.message = "User Doesn't Exists!";
            return error;
        }

        const hashedPassword = fetchedUser.password;
        const typedPassword = await hashData(password);

        if(hashedPassword===typedPassword) {
            console.log("Yes")
            return fetchedUser;
        }
        else {
            error.statuscode = 404;
            error.message = `Invalid Password`;
            error.typedPassword = `${typedPassword}`;
            error.hashedPassword = `${hashedPassword}`;
            return error;
        }
        
    }catch(e) {
        console.log(e.message);
    }
}

module.exports = authenticateUser;