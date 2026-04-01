//

const express = require("express");
const router = express.Router();

//intrnal imports

const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Login route

router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
