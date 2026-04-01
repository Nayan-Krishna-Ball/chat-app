//
const createError = require("http-errors");

//404 not faound handelar
const notFoundHandelar = (req, res, next) => {
  next(createError(404, "Your requested content was not found!"));
};

const defaultErrorHandelar = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
};
module.exports = {
  notFoundHandelar,
  defaultErrorHandelar,
};
