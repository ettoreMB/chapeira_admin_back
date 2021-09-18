import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInvoicesByStoreUseCase } from "./ListInvoicesByStoreUseCase";

class ListInvoiceByStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla } = req.query;
    console.log(sigla)
    // const listInvoicesByStoreUseCase = container.resolve(
    //   ListInvoicesByStoreUseCase
    // );
    // const invoices = await listInvoicesByStoreUseCase.execute(sigla);
    return res.json(req.query)
  }
}

export { ListInvoiceByStoreController };
