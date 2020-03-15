const mongoose = require('mongoose');

const dbConnect = () => {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;
    const database = process.env.DB_DATABASE;
    return mongoose.connect(
        `mongodb://${user}:${password}@${host}:${port}/${database}`,
        {useNewUrlParser: true, useFindAndModify: false},
        );
}


module.exports = dbConnect;
    