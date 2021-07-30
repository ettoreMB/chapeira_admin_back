import { inject, injectable } from "tsyringe";
import { Invoice } from "../../entities/Invoice";
import { InvoiceRepository } from "../../repositories/implementation/InvoiceRepository";

@injectable()
 class ListInvoicesUseCase {

  constructor(
    @inject('InvoicesRepostiory')
    private invoiceRepository: InvoiceRepository
  ){}

  async execute():Promise<Invoice[]> {
    const invoices =  await this.invoiceRepository.list();

    return invoices
  }

 }

export { ListInvoicesUseCase }