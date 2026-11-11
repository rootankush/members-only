const db = require("../db/queries.js");
const { body, validationResult, matchedData } = require("express-validator");

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("Please Enter your First Name")
    .isLength({ max: 255 })
    .withMessage("First Name must be 255 or fewer."),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Please Enter your Last Name")
    .isLength({ max: 255 })
    .withMessage("Last Name must be 255 or fewer."),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Please Enter your Username")
    .isLength({ max: 255 })
    .withMessage("Username must be 255 or fewer."),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Please Enter your Password")
    .isLength({ max: 255 })
    .withMessage("Password must be 255 or fewer."),
];

async function insertUserGet(req, res) {
  res.render("../views/sign-up-form.ejs", {
    title: "Sign Up",
    errors: [],
    values: {},
  });
}

module.exports = {
  insertUserGet,
};
