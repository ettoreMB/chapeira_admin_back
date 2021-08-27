import { ICreateInvoiceDTO } from "../dto";
import { Invoice } from "../infra/typeorm/entities/Invoice";

interface IInvoiceRepository {
  create(data: ICreateInvoiceDTO): Promise<void>;
  findByNumber(Nota_Fiscal: string): Promise<Invoice>;
  list(): Promise<Invoice[]>;
}

export { IInvoiceRepository };
