import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetServicesByStoreUseCase } from "./GetServicesByStoreUseCase";

class GetServicesByStoreController {
  async handle(req: Request, res: Response) {
    const { sigla } = req.params;

    const getServicesByStoreUseCase = container.resolve(GetServicesByStoreUseCase);
    const services = await getServicesByStoreUseCase.execute(sigla);
    res.json(services)
  }
}

export { GetServicesByStoreController };