import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class GetStoreBySiglaUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository
  ) { }

  async execute(Loja_Sigla: string): Promise<Store> {
    const store = await this.storesRepository.findBySigla(Loja_Sigla);

    if (!store) throw new AppErrors("Store not Found");

    return store;
  }
}

export { GetStoreBySiglaUseCase };
