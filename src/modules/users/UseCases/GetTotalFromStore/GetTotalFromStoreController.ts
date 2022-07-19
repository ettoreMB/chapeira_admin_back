import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTotalUsersUseCase } from "./GetTotalFromStoreUseCase";

export class GetTotalUsersController {
  async handle(req:Request, res:Response):Promise<Response> {
    const {sigla} = req.params

    const getTotalUsersUseCase = container.resolve(GetTotalUsersUseCase)

    const total = await getTotalUsersUseCase.execute(sigla)
    return res.status(200).json(total)
  }
}