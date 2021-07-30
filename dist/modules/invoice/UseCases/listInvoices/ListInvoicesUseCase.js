"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListInvoicesUseCase = void 0;

var _tsyringe = require("tsyringe");

var _InvoiceRepository = require("../../repositories/implementation/InvoiceRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListInvoicesUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('InvoicesRepostiory')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _InvoiceRepository.InvoiceRepository === "undefined" ? Object : _InvoiceRepository.InvoiceRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListInvoicesUseCase {
  constructor(invoiceRepository) {
    this.invoiceRepository = invoiceRepository;
  }

  async execute() {
    const invoices = await this.invoiceRepository.list();
    return invoices;
  }

}) || _class) || _class) || _class) || _class);
exports.ListInvoicesUseCase = ListInvoicesUseCase;