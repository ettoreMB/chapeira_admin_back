import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

interface IRequest {
  Loja_Sigla: string;
  data: {
    Loja: string;
    Loja_Endereco: string;
    Loja_Cidade: string;
    Loja_UF: string;
    Loja_Telefone?: string;
    Responsavel: string;
    Responsavel_Email: string;
    Responsavel_Telefone: string;
    Adm_Email?: string;
    Faturamento_Responsavel?: string;
    Faturamento_Telefone?: string;
    Faturamento_Email?: string;
    CNPJ: number;
  };
}

@injectable()
class EditStoreUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository
  ) {}

  async execute({ Loja_Sigla, data }: IRequest): Promise<Store> {
    const store = await this.storesRepository.findBySigla(Loja_Sigla);

    if (!store) {
      throw new AppErrors("Store not exists");
    }

    await this.storesRepository.edit(Loja_Sigla, data);

    return store;
  }
}

export { EditStoreUseCase };
