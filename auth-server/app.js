const express = require("express");
const {connectToDatabase} = require("./db/connection");
connectToDatabase()
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const bodyParser = express.json;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser());
app.use("/app/v1/signup",signupRoute);
app.use("/app/v1/login",loginRoute);


app.listen(process.env.PORT,()=>console.log(`App is live @ 127.0.0.1:${process.env.PORT}`));
