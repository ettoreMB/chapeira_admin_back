import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStoreUseCase } from "./CreateStoreUseCase";

class CreateStoreController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const { 
      loja_sigla,
      loja_nome,
      loja_endereco,
      loja_cidade,
      loja_uf,
      loja_cnpj,
      loja_razaosocial = "IGUASPORT LTDA",
      responsavel,
      responsavel_email,
      responsavel_telefone,
      ativo, 
      }= req.body

    const createStoreUseCase = container.resolve(CreateStoreUseCase)

    await createStoreUseCase.execute({
      loja_sigla,
      loja_nome,
      loja_endereco,
      loja_cidade,
      loja_uf,
      loja_cnpj,
      loja_razaosocial,
      responsavel,
      responsavel_email,
      responsavel_telefone,
      ativo,
    });
    
    return res.status(201).send();
   
  }
}


export { CreateStoreController }