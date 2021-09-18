import { InvoiceRepository } from "@modules/invoice/infra/typeorm/repositories/InvoiceRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

interface IRequest {
  Pendente: boolean;
  Pago: boolean;
  Nota_Fiscal: string;
}

@injectable()
class UpdateInvoiceStatusUseCase {
  constructor(
    @inject("InvoicesRepository")
    private invoicesRepository: InvoiceRepository
  ) {}
  async execute({ Nota_Fiscal, Pendente, Pago }: IRequest): Promise<void> {
    const invoice = await this.invoicesRepository.findByNumber(Nota_Fiscal);

    if (!invoice) {
      throw new AppErrors("Invoice does not exists");
    }

    invoice.Pendente = Pendente;

    invoice.Pago = Pago;

    await this.invoicesRepository.create(invoice);
  }
}

export { UpdateInvoiceStatusUseCase };
