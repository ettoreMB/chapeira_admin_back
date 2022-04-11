import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetUsersBySiglaUseCase } from './GetUsersbyStoreUseCase';

class GetUsersbyStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla } = req.params
    const { universe } = req.query
    const universeNumber = Number(universe)
    const getUsersBySigla = container.resolve(GetUsersBySiglaUseCase)
    const users = await getUsersBySigla.execute({ sigla: sigla, universe: universeNumber })
    return res.json(users)
  }
}

export { GetUsersbyStoreController }