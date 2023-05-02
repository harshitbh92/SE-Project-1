const mongoose = require("mongoose");

const connection = async() => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2",connectionParams);
        console.log("Connected to database");
    } catch(err) {
        console.log("Could not connect to the database");
        console.log(err);
    }
}

module.exports = connection;