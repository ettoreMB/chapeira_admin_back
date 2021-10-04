import { Invoice } from "@modules/invoice/infra/typeorm/entities/Invoice";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class ListInvoicesByStoreUseCase {
  constructor(
    @inject("InvoicesRepository")
    private invoicesRepository: IInvoiceRepository,
    @inject("StoresRepository")
    private storesRepository: IStoresRepository
  ) { }

  async execute(sigla: string): Promise<Invoice[]> {
    const invoice = await this.invoicesRepository.findByInitial(sigla);

    if (sigla === "") {
      const invoices = await this.invoicesRepository.list();
      return invoices;
    }

    return invoice;
  }
}

export { ListInvoicesByStoreUseCase };
