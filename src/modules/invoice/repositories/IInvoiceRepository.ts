import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { ICreateInvoiceDTO } from "../dto/ICreateInvoiceDTO";
import { IUpdateInvoiceDTO } from "../dto/IUpdateInvoiceDTO";
import { Invoice } from "../infra/typeorm/entities/Invoice";

interface IInvoiceRepository {
  create(data: ICreateInvoiceDTO): Promise<Invoice>;
  delete(Nota_Fiscal: string): Promise<void>;
  findByNumber(Nota_Fiscal: string): Promise<Invoice>;
  findByInitial(store: string): Promise<Invoice[]>;
  updateStatus(invoice: IUpdateInvoiceDTO): Promise<Invoice>;
  list(): Promise<Invoice[]>;
}

export { IInvoiceRepository };
