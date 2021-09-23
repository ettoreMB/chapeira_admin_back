import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStoreUseCase } from "./CreateStoreUseCase";

class CreateStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      Loja_Sigla,
      CNPJ,
      Loja,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone,
    } = req.body;

    const createStoreUseCase = container.resolve(CreateStoreUseCase);

    await createStoreUseCase.execute({
      Loja_Sigla,
      CNPJ,
      Loja,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone,
    });

    return res.status(201).send("Loja Criada Com sucesso");
  }
}

export { CreateStoreController };
