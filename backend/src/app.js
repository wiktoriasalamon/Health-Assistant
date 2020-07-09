const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const user = require("./routes/user.route");

const dbconfig = require("./config/dbconnect");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/user", user);

dbconfig.connect();

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port ", process.env.SERVER_PORT);
});
