const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 4567;
const app = express();
const routes = require("./routes");
const db = require("./db");

db.on("error", console.error.bind(console, "error"));

// middleware

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
