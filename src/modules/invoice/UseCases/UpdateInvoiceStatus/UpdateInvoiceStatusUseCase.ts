import { InvoiceRepository } from "@modules/invoice/infra/typeorm/repositories/InvoiceRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";
import { Invoice } from "@modules/invoice/infra/typeorm/entities/Invoice";

interface IRequest {
  Pago: boolean;
  Nota_Fiscal: string;
}

@injectable()
class UpdateInvoiceStatusUseCase {
  constructor(
    @inject("InvoicesRepository")
    private invoicesRepository: InvoiceRepository
  ) { }
  async execute({ Nota_Fiscal, Pago }: IRequest): Promise<Invoice> {
    const invoice = await this.invoicesRepository.findByNumber(Nota_Fiscal);

    if (!invoice) {
      throw new AppErrors("Invoice does not exists");
    }

    if (Pago === true) {
      invoice.Pendente = false;
    } else {
      invoice.Pendente = true;
    }


    invoice.Pago = Pago;
    invoice.Nota_Fiscal = Nota_Fiscal;
    invoice.Update_Date = new Date();

    await this.invoicesRepository.updateStatus(invoice);

    return invoice;
  }
}

export { UpdateInvoiceStatusUseCase };
