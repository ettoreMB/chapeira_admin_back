import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticaUserUseCase = container.resolve(AuthenticateUserUseCase);

    authenticaUserUseCase.execute({ email, password });

    return res.status(200).send('Login feito Com Sucesso');
  }
}
export { AuthenticateUserController };