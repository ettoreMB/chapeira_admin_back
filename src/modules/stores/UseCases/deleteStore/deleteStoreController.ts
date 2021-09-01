import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteStoreUseCase } from "./deleteStoreUseCase";

class DeleteStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteStore = container.resolve(DeleteStoreUseCase);

    await deleteStore.execute(id);
    return res.send("Store Deleted");
  }
}

export { DeleteStoreController };
