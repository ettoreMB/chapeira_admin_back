"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateInvoiceController = void 0;

var _tsyringe = require("tsyringe");

var _CreateInvoiceUseCase = require("./CreateInvoiceUseCase");

class CreateInvoiceController {
  async handle(req, res) {
    const {
      Nota_Fiscal,
      loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento
    } = req.body;

    const createinvoiceUseCase = _tsyringe.container.resolve(_CreateInvoiceUseCase.CreateInvoiceUseCase);

    await createinvoiceUseCase.execute({
      Nota_Fiscal,
      loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento
    });
    return res.send();
  }

}

exports.CreateInvoiceController = CreateInvoiceController;