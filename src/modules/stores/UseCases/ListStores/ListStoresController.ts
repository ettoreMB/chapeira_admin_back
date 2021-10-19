import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListStoresUseCase } from "./ListStoresUseCase";

class ListStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { uf } = req.query
    const listStoresUseCase = container.resolve(ListStoresUseCase);

    const allstores = await listStoresUseCase.execute(String(uf));

    return res.send(JSON.stringify(allstores));
  }
}

export { ListStoreController };
