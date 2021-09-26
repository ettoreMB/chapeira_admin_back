import { IStoresDashBoardRepository } from "@modules/stores/repositories/IStoresDashBoardRepository";
import { getRepository, Repository } from "typeorm";

import { ViewStoreDashBoard } from "../entities/StoreDashBoard";

class StoresDashBoardRepository implements IStoresDashBoardRepository {
  private repository: Repository<ViewStoreDashBoard>;
  constructor() {
    this.repository = getRepository(ViewStoreDashBoard);
  }

  async list(): Promise<ViewStoreDashBoard[]> {
    const storeInvoices = await this.repository.find();

    return storeInvoices;
  }

  async getBySigla(loja_Sigla: string): Promise<ViewStoreDashBoard> {
    const storeDashBoard = await this.repository.findOne({ loja_Sigla });
    return storeDashBoard;
  }
}

export { StoresDashBoardRepository };
