import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class EditStoreUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository
  ) { }

  async execute({
    id,
    Loja,
    CNPJ,
    Loja_Endereco,
    Loja_Cidade,
    Loja_UF,
    Loja_Telefone,
    Responsavel,
    Responsavel_Email,
    Responsavel_Telefone }): Promise<Store> {
    const store = await this.storesRepository.findById(id);

    if (!store) {
      throw new AppErrors("Store not exists");
    }

    await this.storesRepository.edit({
      id,
      Loja,
      CNPJ,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone
    });

    return store;
  }
}

export { EditStoreUseCase };
