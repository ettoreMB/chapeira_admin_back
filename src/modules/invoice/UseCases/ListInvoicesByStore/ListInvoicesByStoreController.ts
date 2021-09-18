import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInvoicesByStoreUseCase } from "./ListInvoicesByStoreUseCase";

class ListInvoiceByStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { loja_Sigla } = req.params;
    const listInvoicesByStoreUseCase = container.resolve(
      ListInvoicesByStoreUseCase
    );

    const invoices = await listInvoicesByStoreUseCase.execute(
      String(loja_Sigla)
    );
    return res.send(JSON.stringify(invoices));
  }
}

export { ListInvoiceByStoreController };
