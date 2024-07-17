const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
// const path = require('path');

// cors
app.use(cors());

const userRouter = require("./routes/user");

const authRouter = require("./routes/auth");

const { connectMongoDb } = require("./connection");

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/node-app");

// middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// EJS Templates
// app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

// routes
app.use("/auth", authRouter);

app.use("/users", userRouter);

// app server host
app.listen(8000, () => {
  console.log("server started");
});
