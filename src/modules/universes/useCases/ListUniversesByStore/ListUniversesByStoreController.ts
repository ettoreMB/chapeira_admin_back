import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListUniversesByStoreUseCase } from "./ListUniversesByStoreUseCase";

class ListUniversesByStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla: Loja_Sigla } = req.params;

    const listUniversesRepository = container.resolve(
      ListUniversesByStoreUseCase
    );

    const universes = await listUniversesRepository.execute(Loja_Sigla);

    return res.send(JSON.stringify(universes));
  }
}
export { ListUniversesByStoreController };
