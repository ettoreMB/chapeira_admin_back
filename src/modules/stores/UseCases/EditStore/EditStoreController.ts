import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditStoreUseCase } from "./EditStoreUseCase";

class EditStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const { id } = req.params;
    const createStoreUseCase = container.resolve(EditStoreUseCase);

    await createStoreUseCase.execute({
      id: Number(id),
      data,
    });

    return res.status(201).send("Loja Editada");
  }
}

export { EditStoreController };
