import { ICreateInvoiceDTO } from "../dto/ICreateInvoiceDTO";
import { IUpdateInvoiceDTO } from "../dto/IUpdateInvoiceDTO";
import { Invoice } from "../infra/typeorm/entities/Invoice";

interface IInvoiceRepository {
  create(data: ICreateInvoiceDTO): Promise<Invoice>;
  findByNumber(Nota_Fiscal: string): Promise<Invoice>;
  findByInitial(store: string): Promise<Invoice[]>;
  update(invoice: IUpdateInvoiceDTO): Promise<Invoice>;
  list(): Promise<Invoice[]>;
}

export { IInvoiceRepository };
