const express = require("express");
const dotenv = require("dotenv");

const userRouter = require("./controllers/user.controller");
const authRouter = require("./controllers/user.controller");
const resultRouter = require("./controllers/result.controller");

const dbconfig = require("./config/dbconnect");


const app = express();
dotenv.config({path: "../.env"});

app.use("/user", userRouter)
app.use("/auth", authRouter);
app.use("/result", resultRouter);

dbconfig.connect();

app.listen(process.env.SERVER_PORT, function() {
    console.log("Server started on port ", process.env.SERVER_PORT);
});
