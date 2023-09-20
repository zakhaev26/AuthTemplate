async function createOTP() {
    try {
        const otp = `${1000+ Math.random()*9000}`;
        return otp;
    }catch(e) {
        throw new Error(e.message);
    }
}

module.exports = createOTP