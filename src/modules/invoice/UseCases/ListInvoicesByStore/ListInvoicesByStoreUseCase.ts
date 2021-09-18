import { Invoice } from "@modules/invoice/infra/typeorm/entities/Invoice";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class ListInvoicesByStoreUseCase {
  constructor(
    @inject("InvoicesRepository")
    private invoicesRepository: IInvoiceRepository
  ) {}

  async execute(loja_Sigla: string): Promise<Invoice[]> {
    const store = await this.invoicesRepository.findByInitial(loja_Sigla);

    if (!store) {
      throw new AppErrors("Store Not Found");
    }
    return store;
  }
}

export { ListInvoicesByStoreUseCase };
