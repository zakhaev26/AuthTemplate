const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASSWORD,
    },
})
//test transporter

transporter.verify((err,success)=> {
    if(err) console.log(err);
    else console.log("transporter = ",success);
})

async function sendEmail(mailOptions) {
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = sendEmail