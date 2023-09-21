const User = require("../db/models/user-auth");
const { hashData } = require("../utils/hash-password");

async function createNewUser(data) {
    try {
        const { name, email, password } = data;
        const existing_user = await User.findOne({ email });
        if (existing_user) {
            throw new Error("User Exists!");
        }
        else {
            const hashedPassword = await hashData(password);
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });
            const user = await newUser.save();
            return user
        }
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = createNewUser;