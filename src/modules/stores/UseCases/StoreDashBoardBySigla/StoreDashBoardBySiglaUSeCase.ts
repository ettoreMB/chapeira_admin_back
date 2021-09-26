import { ViewStoreDashBoard } from "@modules/stores/infra/typeorm/entities/StoreDashBoard";
import { IStoresDashBoardRepository } from "@modules/stores/repositories/IStoresDashBoardRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class StoreDashBoardBySiglaUseCase {
  constructor(
    @inject("StoresDashBoardRepository")
    private storeDashBoard: IStoresDashBoardRepository
  ) {}
  async execute(loja_Sigla: string): Promise<ViewStoreDashBoard> {
    const store = await this.storeDashBoard.getBySigla(loja_Sigla);

    return store;
  }
}

export { StoreDashBoardBySiglaUseCase };
