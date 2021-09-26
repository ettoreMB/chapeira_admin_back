import { Request, Response } from "express";
import { container } from "tsyringe";

import { StoreDashBoardBySiglaUseCase } from "./StoreDashBoardBySiglaUSeCase";

class StoreDashBoardBySiglaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla: loja_Sigla } = req.params;

    const storeDashBoardBySiglaUseCase = container.resolve(
      StoreDashBoardBySiglaUseCase
    );

    const store = await storeDashBoardBySiglaUseCase.execute(loja_Sigla);

    return res.send(JSON.stringify(store));
  }
}

export { StoreDashBoardBySiglaController };
