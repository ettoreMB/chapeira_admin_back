import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetUsersBySiglaUseCase } from './GetUsersbyStoreUseCase';

class GetUsersbyStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla } = req.params
    const { universeId } = req.query
    const { type } = req.query
    const universe = Number(universeId)

    const getUsersBySigla = container.resolve(GetUsersBySiglaUseCase);
    const users = await getUsersBySigla.execute({
      sigla,
      universe: universe as number,
      type: type as string
    })
    return res.json(users)
  }
}

export { GetUsersbyStoreController }