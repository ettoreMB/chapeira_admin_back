import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInvoicesByStoreUseCase } from "./ListInvoicesByStoreUseCase";

class ListInvoiceByStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { sigla: Loja_Sigla } = req.query;

    const listInvoicesByStoreUseCase = container.resolve(
      ListInvoicesByStoreUseCase
    );
    const invoices = await listInvoicesByStoreUseCase.execute(
      String(Loja_Sigla)
    );
    return res.send(JSON.stringify(invoices));
  }
}

export { ListInvoiceByStoreController };
