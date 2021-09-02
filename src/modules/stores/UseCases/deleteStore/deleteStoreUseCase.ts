import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class DeleteStoreUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository
  ) {}
  async execute(Loja_Sigla: string): Promise<void> {
    try {
      await this.storesRepository.delete(Loja_Sigla);
    } catch (error) {
      throw new AppErrors(error);
    }
  }
}

export { DeleteStoreUseCase };
