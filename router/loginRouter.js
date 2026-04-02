//

const express = require("express");
const router = express.Router();

//intrnal imports
const { getLogin, login, logout } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

// set page title
const page_title = "Login";

// Login route
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login,
);

//logout route
router.delete("/", logout);

module.exports = router;
