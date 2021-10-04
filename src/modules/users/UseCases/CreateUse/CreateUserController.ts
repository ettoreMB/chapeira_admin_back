import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      Loja_Sigla,
      id_Universo,
      Nome,
      Funcao,
      Email,
      Administrador,
      Senha,
    } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      Loja_Sigla,
      id_Universo,
      Nome,
      Funcao,
      Email,
      Administrador,
      Senha,
    });
    return res.status(200).json(user);
  }
}

export { CreateUserController };
