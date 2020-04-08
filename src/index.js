"use strict";

const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

// load environment variables
dotenv.config();

const app = express();

// use `body-parser` middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// load all routes
app.use("/", require("./routes"));

// start server
app.listen(process.env.PORT, () =>
    console.log("server is now ready to accept requests...")
);
