"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.universeRoutes = void 0;

var _express = require("express");

var _CreateUniverseControllerCopy = require("../modules/stores/UseCases/CreateUniverse/CreateUniverseController copy");

const universeRoutes = (0, _express.Router)();
exports.universeRoutes = universeRoutes;
const createUniverseController = new _CreateUniverseControllerCopy.CreateUniverController();
universeRoutes.post('/', createUniverseController.handle);