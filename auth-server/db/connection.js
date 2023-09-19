require("dotenv").config();
const mongoose =require("mongoose");

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Connected Successfully")
    }catch(err) {
        console.log(err.message)
    }
}

module.exports = {connectToDatabase};