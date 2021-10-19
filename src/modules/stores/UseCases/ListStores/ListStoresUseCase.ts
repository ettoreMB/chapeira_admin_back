import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class ListStoresUseCase {
  constructor(
    @inject("StoresRepository")
    private storesStoreUseCase: IStoresRepository
  ) { }
  async execute(uf?: string): Promise<Store[]> {
    try {
      const stores = await this.storesStoreUseCase.list(uf);

      return stores;
    } catch (error) {
      throw new AppErrors(error);
    }
  }
}

export { ListStoresUseCase };
