//
const express = require("express");
const router = express.Router();

//intrnal imports
const { getUser } = require("../controller/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidation");
const { addUser, deleteUser } = require("../controller/userController");

// User route

router.get("/", decorateHtmlResponse("Users"), getUser);

router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser,
);

router.delete("/:id", deleteUser);

module.exports = router;
