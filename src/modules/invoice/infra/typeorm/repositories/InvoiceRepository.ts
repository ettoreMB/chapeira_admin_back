import { ICreateInvoiceDTO } from "@modules/invoice/dto/ICreateInvoiceDTO";
import { IUpdateInvoiceDTO } from "@modules/invoice/dto/IUpdateInvoiceDTO";
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
    Loja_Sigla,
    Nota_Fiscal,
    Valor_Servicos,
    Valor_Nota,
    Data_Faturamento,
    Data_Vencimento,
  }: ICreateInvoiceDTO): Promise<Invoice> {
    const invoice = await this.repository.create({
      Loja_Sigla,
      Nota_Fiscal,
      Valor_Servicos,
      Valor_Nota,
      Data_Faturamento,
      Data_Vencimento,
    });

    await this.repository.save(invoice);
    return invoice;
  }

  async delete(Nota_Fiscal: string): Promise<void> {
    const invoice = await this.repository.findOne({ Nota_Fiscal })
    await this.repository.delete(invoice)
  }

  async updateStatus(data: IUpdateInvoiceDTO): Promise<Invoice> {
    const invoice = await this.repository.save(data);
    return invoice;
  }

  async findByInitial(Loja_Sigla: string): Promise<Invoice[]> {
    const invoices = await this.repository.find({
      where: { Loja_Sigla },
    });
    return invoices;
  }
}

export { InvoiceRepository };
