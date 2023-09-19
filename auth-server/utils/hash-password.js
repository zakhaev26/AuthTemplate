const bcrypt = require("bcrypt");


async function hashData(data,saltRounds=10) {
    try {
        const hashedData = await bcrypt.hash(data,saltRounds);
        return hashedData;
    }catch(err) {
        throw new Error("Hashing failed - Password couldn't be hashed @utils/hash-password.js")
    }
}


module.exports = hashData;