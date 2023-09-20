const sendOTP = require("../controllers/sendOTP");

const router =  require("express").Router();

router.post("/",async(req,res)=>{
    try {
        const {email ,subject , message , duration } = req.body;

        const createdOTP = await sendOTP({
            email,
            subject,
            message,
            duration,
        })
        res.status(200).json(createdOTP);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;