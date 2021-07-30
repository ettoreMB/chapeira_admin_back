"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportInvoiceUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IInvoiceRepository = require("../../repositories/IInvoiceRepository");

var _fs = _interopRequireDefault(require("fs"));

var _csvParse = _interopRequireDefault(require("csv-parse"));

var _AppErrors = require("../../../../errors/AppErrors");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ImportInvoiceUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('InvoicesRepostiory')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IInvoiceRepository.IInvoiceRepository === "undefined" ? Object : _IInvoiceRepository.IInvoiceRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ImportInvoiceUseCase {
  constructor(InvoiceRepository) {
    this.InvoiceRepository = InvoiceRepository;
  }

  loadInvoiceFile(file) {
    return new Promise((resolve, reject) => {
      const stream = _fs.default.createReadStream(file.path);

      const invoices = [];
      const parseFile = (0, _csvParse.default)();
      stream.pipe(parseFile);
      parseFile.on('data', async line => {
        const [loja_Sigla, Nota_Fiscal, Data_Faturamento, Valor_Servicos, Valor_Nota, Data_Vencimento] = line;
        invoices.push({
          loja_Sigla,
          Nota_Fiscal,
          Data_Faturamento,
          Valor_Servicos,
          Valor_Nota,
          Data_Vencimento
        });
      }).on("end", () => {
        _fs.default.promises.unlink(file.path);

        resolve(invoices);
      }).on("error", err => {
        reject(err);
      });
    });
  }

  async execute(file) {
    const invoices = await this.loadInvoiceFile(file);
    invoices.map(async invoice => {
      const {
        loja_Sigla,
        Nota_Fiscal,
        Data_Faturamento,
        Valor_Servicos,
        Valor_Nota,
        Data_Vencimento
      } = invoice;
      const existsInvoice = await this.InvoiceRepository.findByNumber(Nota_Fiscal);

      if (!existsInvoice) {
        await this.InvoiceRepository.create({
          loja_Sigla,
          Nota_Fiscal,
          Data_Faturamento,
          Valor_Servicos,
          Valor_Nota,
          Data_Vencimento
        });
      }

      throw new _AppErrors.AppErrors('Chaves Duplicadas');
    });
  }

}) || _class) || _class) || _class) || _class);
exports.ImportInvoiceUseCase = ImportInvoiceUseCase;