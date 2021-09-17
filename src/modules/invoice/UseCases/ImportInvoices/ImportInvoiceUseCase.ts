import { ICreateInvoiceDTO } from "@modules/invoice/dto/ICreateInvoiceDTO";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class ImportInvoiceUseCase {
  constructor(
    @inject("InvoicesRepository")
    private InvoiceRepository: IInvoiceRepository
  ) {}

  loadInvoiceFile(file: Express.Multer.File): Promise<ICreateInvoiceDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const invoices: ICreateInvoiceDTO[] = [];
      const parseFile = csvParse();
      stream.pipe(parseFile);
      parseFile
        .on("data", async (line) => {
          const [
            loja_Sigla,
            Nota_Fiscal,
            Valor_Servicos,
            Valor_Nota,
            Data_Faturamento,
            Data_Vencimento,
          ] = line;

          invoices.push({
            loja_Sigla,
            Nota_Fiscal,
            Valor_Servicos,
            Valor_Nota,
            Data_Faturamento,
            Data_Vencimento,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(invoices);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const invoices = await this.loadInvoiceFile(file);

    await invoices.map(async (invoice) => {
      const {
        loja_Sigla,
        Nota_Fiscal,
        Valor_Servicos,
        Valor_Nota,
        Data_Faturamento,
        Data_Vencimento,
      } = invoice;

      const existsInvoice = await this.InvoiceRepository.findByNumber(
        Nota_Fiscal
      );

      if (!existsInvoice) {
        await this.InvoiceRepository.create({
          loja_Sigla,
          Nota_Fiscal,
          Valor_Servicos,
          Valor_Nota,
          Data_Faturamento,
          Data_Vencimento,
        });
      }
    });
  }
}

export { ImportInvoiceUseCase };
