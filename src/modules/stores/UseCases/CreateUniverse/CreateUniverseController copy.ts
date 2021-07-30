import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUniverseUseCase } from "./CreateUniverseUseCase";

class CreateUniverController {
 async handle(req: Request, res:Response):Promise<Response> {
   const {loja_sigla, zona, andar, universo_nome} = req.body;

   const createUniverseUsecase = container.resolve(CreateUniverseUseCase)

    
   await createUniverseUsecase.execute(
     {
       loja_sigla, zona, andar, universo_nome
      }
    );

   return res.status(201).send()



  }
}

export {CreateUniverController}