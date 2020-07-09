const mongoose = require("mongoose");
const dotenv = require("dotenv");

const config = {
    connect: function() {
        const user = process.env.DB_USER;
        const password = process.env.DB_PASSWORD;
        const host = process.env.DB_HOST;
        const port = process.env.DB_EXTERNAL_PORT;
        const database = process.env.DB_DATABASE;

        mongoose.connect(
            `mongodb://${user}:${password}@${host}:${port}/${database}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("DB connected");
            })
            .catch(error => {
                console.log("Error with db")
                console.log(error);
            })
    }
}
module.exports = config;