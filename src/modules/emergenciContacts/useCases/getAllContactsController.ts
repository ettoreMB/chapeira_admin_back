import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllEmergenciContactsUseCase } from "./getAllContactsUseCase";

export  class getAllEmergenciContactsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {store} = req.params
    console.log(store)
    const getAllEmergenciContactsUseCase = container.resolve(GetAllEmergenciContactsUseCase );

    const contacts = await getAllEmergenciContactsUseCase.execute(store as string)

    return res.status(200).json(contacts)
  }
}