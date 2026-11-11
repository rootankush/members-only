require("dotenv").config();
const path = require("node:path");
const express = require("express");
const session = require("express-session");
const authRouter = require("./routes/authsRouter.js");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/", authRouter);

app.get("/sign-up", (req, res) => res.render("sign-up-form"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
