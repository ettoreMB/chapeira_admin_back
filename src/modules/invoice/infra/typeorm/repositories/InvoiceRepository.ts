import { ICreateInvoiceDTO } from "@modules/invoice/dto";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { getRepository, Repository } from "typeorm";

import { Invoice } from "../entities/Invoice";

class InvoiceRepository implements IInvoiceRepository {
  private invoices: Repository<Invoice>;

  constructor() {
    this.invoices = getRepository(Invoice);
  }
  async list(): Promise<Invoice[]> {
    const invoices = await this.invoices.find();

    return invoices;
  }

  async findByNumber(Nota_Fiscal: string): Promise<Invoice> {
    const invoice = await this.invoices.findOne({ Nota_Fiscal });

    return invoice;
  }

  async create({
    loja_Sigla,
    Nota_Fiscal,
    Valor_Servicos,
    Valor_Nota,
    Data_Faturamento,
    Data_Vencimento,
  }: ICreateInvoiceDTO): Promise<void> {
    const invoice = await this.invoices.create({
      loja_Sigla,
      Nota_Fiscal,
      Valor_Servicos,
      Valor_Nota,
      Data_Faturamento,
      Data_Vencimento,
    });

    await this.invoices.save(invoice);
  }
}

export { InvoiceRepository };
