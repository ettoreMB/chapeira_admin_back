import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditStoreUseCase } from "./EditStoreUseCase";

class EditStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      Loja,
      CNPJ,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone
    } = req.body;
    const { id } = req.params

    const createStoreUseCase = container.resolve(EditStoreUseCase);

    await createStoreUseCase.execute({
      id,
      Loja,
      CNPJ,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone
    });

    return res.status(201).send("Loja Editada");
  }
}

export { EditStoreController };
