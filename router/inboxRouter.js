//

const express = require("express");
const router = express.Router();

//intrnal imports

const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Inbox route

router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
