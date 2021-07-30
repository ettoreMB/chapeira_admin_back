"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _store = require("./store.routes");

var _universes = require("./universes.routes");

var _invoices = require("./invoices.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use('/stores', _store.storeRoutes);
router.use('/universe', _universes.universeRoutes);
router.use('/invoices', _invoices.invoiceRoutes);