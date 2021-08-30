import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetStoreBySiglaUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository
  ) {}

  async execute(Loja_Sigla: string): Promise<Store> {
    const store = await this.storesRepository.findBySigla(Loja_Sigla);

    return store;
  }
}

export { GetStoreBySiglaUseCase };
