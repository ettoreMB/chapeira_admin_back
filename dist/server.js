"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("express-async-errors");

require("reflect-metadata");

require("./database");

require("./shared/container");

var _routes = require("./routes");

var _AppErrors = require("./errors/AppErrors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.router);
app.use((err, req, res, next) => {
  if (err instanceof _AppErrors.AppErrors) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  return res.status(500).json({
    message: `internal server Error - ${err.message}`
  });
});
app.listen(3333, () => {
  console.log('server is Running on Port 3333');
});