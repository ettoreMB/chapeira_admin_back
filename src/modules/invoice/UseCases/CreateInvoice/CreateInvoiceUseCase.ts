import { ICreateInvoiceDTO } from "@modules/invoice/dto/ICreateInvoiceDTO";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class CreateInvoiceUseCase {
  constructor(
    @inject("InvoicesRepository")
    private InvoiceRepository: IInvoiceRepository,
    @inject("StoresRepository")
    private storesRepositoy: IStoresRepository
  ) {}

  async execute({
    Nota_Fiscal,
    loja_Sigla,
    Data_Faturamento,
    Valor_Servicos,
    Valor_Nota,
    Data_Vencimento,
  }: ICreateInvoiceDTO): Promise<void> {
    const store = await this.storesRepositoy.findBySigla(loja_Sigla);

    if (!store) {
      throw new AppErrors("Store Initials non exists");
    }

    const existsInvoice = await this.InvoiceRepository.findByNumber(
      Nota_Fiscal
    );
    if (existsInvoice) {
      throw new AppErrors("Invoice Already Exists");
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
