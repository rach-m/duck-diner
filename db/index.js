const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/dinerDatabase", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("MongoDB Connected!");
    })
    .catch((err) => {
        console.log(err.message);
    });

// comment out in production
mongoose.set("debug", true);

const db = mongoose.connection;

module.exports = db;
