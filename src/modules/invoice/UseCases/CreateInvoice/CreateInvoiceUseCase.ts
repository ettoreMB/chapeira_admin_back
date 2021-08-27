import { ICreateInvoiceDTO } from "@modules/invoice/dto";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class CreateInvoiceUseCase {
  constructor(
    @inject("InvoicesRepostiory")
    private InvoiceRepository: IInvoiceRepository
  ) {}

  async execute({
    Nota_Fiscal,
    loja_Sigla,
    Data_Faturamento,
    Valor_Servicos,
    Valor_Nota,
    Data_Vencimento,
  }: ICreateInvoiceDTO): Promise<void> {
    const existsInvoice = await this.InvoiceRepository.findByNumber(
      Nota_Fiscal
    );
    if (existsInvoice) {
      throw new AppErrors("Invoice AlreadyExists");
    }

    await this.InvoiceRepository.create({
      Nota_Fiscal,
      loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento,
    });
  }
}

export { CreateInvoiceUseCase };
