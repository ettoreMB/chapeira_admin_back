import { getRepository, Repository } from "typeorm";
import { ICreateInvoiceDTO } from "../../dto";
import { Invoice } from '../../entities/Invoice'
import { IInvoiceRepository } from "../IInvoiceRepository";

class InvoiceRepository implements IInvoiceRepository {
  private invoices: Repository<Invoice>;

  constructor(){
    this.invoices = getRepository(Invoice);
  }
  async list(): Promise<Invoice[]> {
    const invoices = await this.invoices.find();

    return invoices
  }yarn 
  
  async findByNumber(Nota_Fiscal: string): Promise<Invoice> {
    const invoice = await this.invoices.findOne({Nota_Fiscal});

    return invoice
  }
    
  async create({
    Nota_Fiscal,
    loja_Sigla,
    Data_Faturamento,
    Valor_Servicos,
    Valor_Nota,
    Data_Vencimento,
  
  }:ICreateInvoiceDTO): Promise<void> {
   const invoice = this.invoices.create({
     loja_Sigla,
     Nota_Fiscal,
     Data_Faturamento,
     Valor_Servicos,
     Valor_Nota,
     Data_Vencimento,
  });

   await this.invoices.save(invoice)
  }

  

}

export {InvoiceRepository}