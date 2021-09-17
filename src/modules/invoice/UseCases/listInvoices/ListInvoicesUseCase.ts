import { inject, injectable } from "tsyringe";

import { Invoice } from "../../infra/typeorm/entities/Invoice";
import { InvoiceRepository } from "../../infra/typeorm/repositories/InvoiceRepository";

@injectable()
class ListInvoicesUseCase {
  constructor(
    @inject("InvoicesRepository")
    private invoiceRepository: InvoiceRepository
  ) {}

  async execute(): Promise<Invoice[]> {
    const invoices = await this.invoiceRepository.list();

    return invoices;
  }
}

export { ListInvoicesUseCase };
