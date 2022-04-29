const express = require("express");
const app = express();
const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const routes = require("./routes")

//body parse
app.use(express.json())


//middleware
app.use(xss());
app.use(mongoSanitize());


//routes
app.use("/api", routes)


const port = process.env.PORT || 3003
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})