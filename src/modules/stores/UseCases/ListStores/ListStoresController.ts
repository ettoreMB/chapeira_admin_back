import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListStoresUseCase } from "./ListStoresUseCase";

class ListStoreController {
  async handle(req: Request, res: Response): Promise<Response> {

    const listStoresUseCase = container.resolve(ListStoresUseCase);

    const allstores = await listStoresUseCase.execute();

    return res.status(200).json(allstores);
  }
}

export { ListStoreController };
