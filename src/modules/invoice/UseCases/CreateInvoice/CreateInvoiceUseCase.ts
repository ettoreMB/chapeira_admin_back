import { ICreateInvoiceDTO } from "@modules/invoice/dto/ICreateInvoiceDTO";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";
import { Invoice } from "@modules/invoice/infra/typeorm/entities/Invoice";

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
    Loja_Sigla,
    Data_Faturamento,
    Valor_Servicos,
    Valor_Nota,
    Data_Vencimento,
  }: ICreateInvoiceDTO): Promise<Invoice> {
    const store = await this.storesRepositoy.findBySigla(Loja_Sigla);

    if (!store) {
      throw new AppErrors("Store Initials non exists");
    }

    const existsInvoice = await this.InvoiceRepository.findByNumber(
      Nota_Fiscal
    );
    if (existsInvoice) {
      throw new AppErrors("Invoice Already Exists");
    }

    const invoice = await this.InvoiceRepository.create({
      Nota_Fiscal,
      Loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento,
    });

    return invoice;
  }
}

export { CreateInvoiceUseCase };
