import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateInvoiceStatusUseCase } from "./UpdateInvoiceStatusUseCase";

class UpdateInvoiceStatusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { Pago } = req.body;
    const { Nota_Fiscal } = req.params;

    const updateInvoiceStatusUseCase = container.resolve(
      UpdateInvoiceStatusUseCase
    );
    await updateInvoiceStatusUseCase.execute({ Nota_Fiscal, Pago });

    return res.status(201).send("Invoice Updated");
  }
}

export { UpdateInvoiceStatusController };
