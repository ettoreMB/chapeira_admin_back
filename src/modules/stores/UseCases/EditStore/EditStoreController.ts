import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditStoreUseCase } from "./EditStoreUseCase";

class EditStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { data } = req.body;
    const { sigla: Loja_Sigla } = req.params;
    const createStoreUseCase = container.resolve(EditStoreUseCase);

    await createStoreUseCase.execute({
      data,
      Loja_Sigla,
    });

    return res.status(201).send("Loja Editada");
  }
}

export { EditStoreController };
