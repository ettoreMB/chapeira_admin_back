import { Request, Response } from "express";
import { container } from "tsyringe";

import { StoreDashBoardUseCase } from "./StoreDashBoardUseCase";

class StoreDashBoardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listStoresUseCase = container.resolve(StoreDashBoardUseCase);

    const stores = await listStoresUseCase.execute();

    return res.send(JSON.stringify(stores));
  }
}

export { StoreDashBoardController };
