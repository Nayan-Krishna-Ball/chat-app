//

const express = require("express");
const router = express.Router();

//intrnal imports

const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");
// Inbox route

router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
