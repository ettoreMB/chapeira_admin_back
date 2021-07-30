"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeRoutes = void 0;

var _express = require("express");

var _CreateStoreController = require("../modules/stores/UseCases/CreateStore/CreateStoreController");

var _ListStoresController = require("../modules/stores/UseCases/ListStores/ListStoresController");

const storeRoutes = (0, _express.Router)();
exports.storeRoutes = storeRoutes;
const createStoreController = new _CreateStoreController.CreateStoreController();
const listStoresController = new _ListStoresController.ListStoreController();
storeRoutes.post('/', createStoreController.handle);
storeRoutes.get('/', listStoresController.handle);