import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStoreUseCase } from "./deleteStoreUseCase";

class DeleteStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla: Loja_Sigla } = req.params;
    const deleteStore = container.resolve(DeleteStoreUseCase);
    await deleteStore.execute(Loja_Sigla);
    return res.send("Store Deleted");
  }
}

export { DeleteStoreController };
