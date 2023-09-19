const express = require("express");
const {connectToDatabase} = require("./db/connection");
connectToDatabase()
const signupRoute = require("./routes/signup");
const bodyParser = express.json;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser());
app.use("/app/v1/signup",signupRoute);
app.get("/",()=>{
    console.log("CCC")
})

app.listen(process.env.PORT,()=>console.log(`App is live @ 127.0.0.1:${process.env.PORT}`));
