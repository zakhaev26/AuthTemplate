const jwt = require("jsonwebtoken");

async function createToken(tokenData,tokenKey=process.env.TOKEN_KEY,expiresIn=process.env.TOKEN_EXPIRY) {
    try {
        const token = await jwt.sign(tokenData,tokenKey,{
            expiresIn,
        });

        return token;
    }catch(e) {
        throw new Error(e.message);
    }
}

module.exports = createToken;