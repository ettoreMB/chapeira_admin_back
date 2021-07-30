"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListInvoicesController = void 0;

var _tsyringe = require("tsyringe");

var _ListInvoicesUseCase = require("../listInvoices/ListInvoicesUseCase");

class ListInvoicesController {
  async handle(req, res) {
    const listInvoicesUseCase = _tsyringe.container.resolve(_ListInvoicesUseCase.ListInvoicesUseCase);

    const allInvoices = await listInvoicesUseCase.execute();
    return res.send(JSON.stringify(allInvoices));
  }

}

exports.ListInvoicesController = ListInvoicesController;