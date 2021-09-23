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
  ) {}

  async execute({ id, data }): Promise<Store> {
    const store = await this.storesRepository.findById(id);

    if (!store) {
      throw new AppErrors("Store not exists");
    }

    await this.storesRepository.edit(id, data);

    return store;
  }
}

export { EditStoreUseCase };
