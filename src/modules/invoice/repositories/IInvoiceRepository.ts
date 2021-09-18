import { ICreateInvoiceDTO } from "../dto/ICreateInvoiceDTO";
import { Invoice } from "../infra/typeorm/entities/Invoice";

interface IInvoiceRepository {
  create(data: ICreateInvoiceDTO): Promise<void>;
  findByNumber(Nota_Fiscal: string): Promise<Invoice>;
  findByInitial(store: string): Promise<Invoice[]>;
  list(): Promise<Invoice[]>;
}

export { IInvoiceRepository };
