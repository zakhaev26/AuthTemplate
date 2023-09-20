const jwt = require("jsonwebtoken");

async function verifyToken(req,res,next) {
    const token = req.body.token;

    if(!token) 
        return res.status(403).send("An Authentication Token is required!")

    //verify
    try {
        const decodedToken = await jwt.verify(token,process.env.TOKEN_KEY);
        console.log(decodedToken);
        req.currentUser = decodedToken;
        console.log("RC:",req.currentUser)
    }catch(e) {
        return res.status(401).send("Invalid Token provided");
    }
    
    //proceed with the request
    return next();
}

module.exports = verifyToken;