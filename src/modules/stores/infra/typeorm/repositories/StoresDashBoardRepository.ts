import { IStoresDashBoardRepository } from "@modules/stores/repositories/StoresDashBoardRepository";
import { getRepository, Repository } from "typeorm";

import { ViewStoreDashBoard } from "../entities/StoreDashBoard";

class StoresDashBoardRepository implements IStoresDashBoardRepository {
  private repository: Repository<ViewStoreDashBoard>;
  constructor() {
    this.repository = getRepository(ViewStoreDashBoard);
  }
  async list(): Promise<any> {
    const storeInvoices = await this.repository.find();

    return storeInvoices;
  }
}

export { StoresDashBoardRepository };
