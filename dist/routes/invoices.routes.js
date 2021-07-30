"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoiceRoutes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _CreateInvoiceController = require("../modules/invoice/UseCases/CreateInvoice/CreateInvoiceController");

var _ImportInvoiceController = require("../modules/invoice/UseCases/ImportInvoices/ImportInvoiceController");

var _ListInvoicesController = require("../modules/invoice/UseCases/listInvoices/ListInvoicesController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const upload = (0, _multer.default)({
  dest: "./tmp"
});
const invoiceRoutes = (0, _express.Router)();
exports.invoiceRoutes = invoiceRoutes;
const createinvoiceController = new _CreateInvoiceController.CreateInvoiceController();
const importInvoiceController = new _ImportInvoiceController.ImportInvoiceController();
const listInvoicesController = new _ListInvoicesController.ListInvoicesController();
invoiceRoutes.post('/', createinvoiceController.handle);
invoiceRoutes.post('/import', upload.single('file'), importInvoiceController.handle);
invoiceRoutes.get('/', listInvoicesController.handle);