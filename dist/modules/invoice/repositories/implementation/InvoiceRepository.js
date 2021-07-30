"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceRepository = void 0;

var _typeorm = require("typeorm");

var _Invoice = require("../../entities/Invoice");

class InvoiceRepository {
  constructor() {
    this.invoices = void 0;
    this.yarn = void 0;
    this.invoices = (0, _typeorm.getRepository)(_Invoice.Invoice);
  }

  async list() {
    const invoices = await this.invoices.find();
    return invoices;
  }

  async findByNumber(Nota_Fiscal) {
    const invoice = await this.invoices.findOne({
      Nota_Fiscal
    });
    return invoice;
  }

  async create({
    Nota_Fiscal,
    loja_Sigla,
    Data_Faturamento,
    Valor_Servicos,
    Valor_Nota,
    Data_Vencimento
  }) {
    const invoice = this.invoices.create({
      loja_Sigla,
      Nota_Fiscal,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento
    });
    await this.invoices.save(invoice);
  }

}

exports.InvoiceRepository = InvoiceRepository;