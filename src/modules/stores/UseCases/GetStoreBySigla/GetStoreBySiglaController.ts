import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetStoreBySiglaUseCase } from "./GetStoreBySiglaUseCase";

class GetStoreBySiglaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla: Loja_Sigla } = req.params;

    const getStoreBySigla = container.resolve(GetStoreBySiglaUseCase);

    const store = await getStoreBySigla.execute(Loja_Sigla);

    return res.send(JSON.stringify(store));
  }
}

export { GetStoreBySiglaController };
