import { Request, Response } from "express";

import { container } from "tsyringe";
import { UserChekInUseCase } from "./UserCheckinUseCase";

export class UserCheckinController {
  async handle(req: Request, res: Response):Promise<Response>{
    const {id} = req.params;
    const ip = req.socket.remoteAddress
    const browser = req.headers["user-agent"]

    const userCheckinUseCase = container.resolve(UserChekInUseCase)

    const user = await userCheckinUseCase.execute({id, ip, browser});

    return res.status(200).json(user)
  }
}