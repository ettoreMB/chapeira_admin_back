import { ICreateInvoiceDTO } from "@modules/invoice/dto/ICreateInvoiceDTO";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { getRepository, Repository } from "typeorm";

import { Invoice } from "../entities/Invoice";

class InvoiceRepository implements IInvoiceRepository {
  private repository: Repository<Invoice>;

  constructor() {
    this.repository = getRepository(Invoice);
  }

  async list(): Promise<Invoice[]> {
    const invoices = await this.repository.find();

    return invoices;
  }

  async findByNumber(Nota_Fiscal: string): Promise<Invoice> {
    const invoice = await this.repository.findOne({ Nota_Fiscal });

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
    const invoice = await this.repository.create({
      loja_Sigla,
      Nota_Fiscal,
      Valor_Servicos,
      Valor_Nota,
      Data_Faturamento,
      Data_Vencimento,
    });

    await this.repository.save(invoice);
  }

  async findByInitial(loja_Sigla: string): Promise<Invoice[]> {
    const invoices = await this.repository.find({
      where: { loja_Sigla },
    });
    return invoices;
  }
}

export { InvoiceRepository };
