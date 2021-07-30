"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListStoreController = void 0;

var _tsyringe = require("tsyringe");

var _ListStoresUseCase = require("./ListStoresUseCase");

class ListStoreController {
  async handle(req, res) {
    const listStoresUseCase = _tsyringe.container.resolve(_ListStoresUseCase.ListStoresUseCase);

    const allstores = await listStoresUseCase.execute();
    return res.send(JSON.stringify(allstores));
  }

}

exports.ListStoreController = ListStoreController;