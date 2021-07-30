"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateInvoiceUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IInvoiceRepository = require("../../repositories/IInvoiceRepository");

var _AppErrors = require("../../../../errors/AppErrors");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateInvoiceUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('InvoicesRepostiory')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IInvoiceRepository.IInvoiceRepository === "undefined" ? Object : _IInvoiceRepository.IInvoiceRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateInvoiceUseCase {
  constructor(InvoiceRepository) {
    this.InvoiceRepository = InvoiceRepository;
  }

  async execute({
    Nota_Fiscal,
    loja_Sigla,
    Data_Faturamento,
    Valor_Servicos,
    Valor_Nota,
    Data_Vencimento
  }) {
    const existsInvoice = await this.InvoiceRepository.findByNumber(Nota_Fiscal);

    if (existsInvoice) {
      throw new _AppErrors.AppErrors('Invoice AlreadyExists');
    }

    await this.InvoiceRepository.create({
      Nota_Fiscal,
      loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateInvoiceUseCase = CreateInvoiceUseCase;