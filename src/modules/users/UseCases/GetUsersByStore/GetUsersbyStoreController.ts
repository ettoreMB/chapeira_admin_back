import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetUsersBySiglaUseCase } from './GetUsersbyStoreUseCase';

class GetUsersbyStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla } = req.query
    const getUsersBySigla = container.resolve(GetUsersBySiglaUseCase)
    const users = await getUsersBySigla.execute({ sigla: sigla as string })
    return res.json(users)
  }
}

export { GetUsersbyStoreController }