import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUniverseUseCase } from "./CreateUniverseUseCase";

class CreateUniverseController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { Loja_Sigla, Universo, Zona, Andar } = req.body;

    const universesUseCase = container.resolve(CreateUniverseUseCase);

    await universesUseCase.execute({
      Loja_Sigla,
      Universo,
      Zona,
      Andar,
    });

    return res.status(201).send("Universo Criado Com Sucesso");
  }
}

export { CreateUniverseController };
