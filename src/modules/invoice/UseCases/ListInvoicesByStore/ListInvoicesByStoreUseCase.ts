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

  async execute(Loja_Sigla: string): Promise<Invoice[]> {
    const store = await this.storesRepository.findBySigla(Loja_Sigla);

    if (!store) {
      throw new AppErrors("Store does not exists!!");
    }

    const invoices = await this.invoicesRepository.findByInitial(Loja_Sigla);

    return invoices;
  }
}

export { ListInvoicesByStoreUseCase };
