import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateAdminUseCase } from './UpdateAdminUseCase'
class UpdateAdminController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const updateUserAdmin = container.resolve(UpdateAdminUseCase)
    await updateUserAdmin.execute(id)
    return res.send('Concluido Com Sucesso')
  }
}

export { UpdateAdminController }