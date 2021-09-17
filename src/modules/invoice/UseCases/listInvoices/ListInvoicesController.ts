import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInvoicesUseCase } from "./ListInvoicesUseCase";

class ListInvoicesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listInvoicesUseCase = container.resolve(ListInvoicesUseCase);

    const allInvoices = await listInvoicesUseCase.execute();

    return res.send(JSON.stringify(allInvoices));
  }
}
export { ListInvoicesController };
