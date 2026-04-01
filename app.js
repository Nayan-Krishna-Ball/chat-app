//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports
const {
  notFoundHandelar,
  defaultErrorHandelar,
} = require("./middlewares/common/errorHandelar");

const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set viw engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parser cookies

app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

//404 not found handelar
app.use(notFoundHandelar);

//default error handelar
app.use(defaultErrorHandelar);

//app listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
