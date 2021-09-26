import { IStoresDashBoardRepository } from "@modules/stores/repositories/IStoresDashBoardRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "@shared/errors/AppErrors";

@injectable()
class StoreDashBoardUseCase {
  constructor(
    @inject("StoresDashBoardRepository")
    private storesDashBoardUseCase: IStoresDashBoardRepository
  ) {}
  async execute(): Promise<any> {
    try {
      const stores = await this.storesDashBoardUseCase.list();

      return stores;
    } catch (error) {
      throw new AppErrors(error);
    }
  }
}

export { StoreDashBoardUseCase };
