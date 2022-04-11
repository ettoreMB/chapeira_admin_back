import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetVisitorsByStoreUseCase } from './GetVisitorsByStoreUseCase';

class GetVisitorsByStoreController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla } = req.params;

    const getVisitorsByStoreUseCase = container.resolve(GetVisitorsByStoreUseCase);
    const visitors = await getVisitorsByStoreUseCase.execute(sigla);
    return res.json(visitors);
  }
}

export { GetVisitorsByStoreController }