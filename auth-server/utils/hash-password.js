const bcrypt = require("bcrypt");


async function hashData(data,saltRounds=10) {
    try {
        const hashedData = await bcrypt.hash(data,saltRounds);
        return hashedData;
    }catch(err) {
        throw new Error("Hashing failed - Password couldn't be hashed @utils/hash-password.js")
    }
}

async function verifyHashedData(unhashed,hashed) {

    try {
        const match = await bcrypt.compare(unhashed,hashed);
        return match;
    } catch(e) {
        throw new Error(e.message);
    }
}

module.exports = {hashData,verifyHashedData};