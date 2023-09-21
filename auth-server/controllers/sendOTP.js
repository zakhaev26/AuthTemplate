const OTP = require("../db/models/otp");
const createOTP = require("../utils/createOTP");
const { hashData } = require("../utils/hash-password");
const sendEmail = require("../utils/sendEmail");

async function sendOTP({ email, subject, message, duration = 1 }) {
    try {
        console.log(email, subject, message, duration )
        if (!(email && subject && message))
            throw new Error("Provide values for email,subject,message");
        //clear any old record 
        await OTP.deleteOne({ email });
        const NEW_PIN = await createOTP();

        //SEND EMAIL

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to:email,
            subject,
            html:`<p>${message}</p><p>${NEW_PIN}</p><p>This Code expires in ${duration} hours.</p>`
        }
        await sendEmail(mailOptions);
        //sasve otp record
        const hashedOTP = await hashData(NEW_PIN);

        const newOTP = await new OTP({
            email,
            otp:hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000 * +duration,
        });
        
        const createdOTPRecord = await newOTP.save();
        return createdOTPRecord;
        
    } catch (e) {
        throw new Error(e.mesage);
    }
}

module.exports = sendOTP;