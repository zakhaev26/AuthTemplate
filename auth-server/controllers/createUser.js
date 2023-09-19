const { default: User } = require("../db/models/user-auth");
const hashData = require("../utils/hash-password");

async function createNewUser(data) {
    try {
        const { name, email, password } = data;
        password = await hashData(password);
        const existing_user = await User.findOne({
            name,
            email,
            password
        });

        if (existing_user) throw new Error("User Exists");
        else {
            const newUser = new User({
                name,
                email,
                password
            });

            const createdUser = await User.save(newUser);
            return createdUser;
        }
    } catch (err) {
        throw new Error("Creating user failed at controllers/createUser.js");
    }
}

module.exports = createNewUser;