import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetStoreBySiglaUseCase } from "./GetStoreBySiglaUseCase";

class GetStoreBySiglaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla, nome } = req.query;

    const getStoreBySigla = container.resolve(GetStoreBySiglaUseCase);

    const store = await getStoreBySigla.execute({
      Loja_Sigla: sigla as string,
      Loja_Nome: nome as string
    });

    return res.status(200).json(store);
  }
}

export { GetStoreBySiglaController };
