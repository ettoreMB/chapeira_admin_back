"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportInvoiceController = void 0;

var _tsyringe = require("tsyringe");

var _ImportInvoiceUseCase = require("./ImportInvoiceUseCase");

class ImportInvoiceController {
  async handle(req, res) {
    const {
      file
    } = req;

    const importInvoiceUseCase = _tsyringe.container.resolve(_ImportInvoiceUseCase.ImportInvoiceUseCase);

    await importInvoiceUseCase.execute(file);
    return res.send();
  }

}

exports.ImportInvoiceController = ImportInvoiceController;