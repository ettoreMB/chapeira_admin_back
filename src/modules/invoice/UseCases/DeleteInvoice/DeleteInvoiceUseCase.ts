import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { AppErrors } from "@shared/errors/AppErrors";
import { response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteInvoiceUseCase {
  constructor(
    @inject("InvoicesRepository")
    private invoicesRepository: IInvoiceRepository,
  ) { }
  async execute(Nota_Fiscal: string): Promise<void> {
    const invoice = await this.invoicesRepository.findByNumber(Nota_Fiscal);

    if (!invoice) { throw new AppErrors('Invoice does not exists') }

    await this.invoicesRepository.delete(Nota_Fiscal);

  }
}
export { DeleteInvoiceUseCase }