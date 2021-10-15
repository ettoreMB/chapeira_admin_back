import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateInvoiceStatusUseCase } from "./UpdateInvoiceStatusUseCase";

class UpdateInvoiceStatusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { status } = req.params;
    const { Nota_Fiscal } = req.params;

    const updateInvoiceStatusUseCase = container.resolve(
      UpdateInvoiceStatusUseCase
    );

    const Pago = (/true/i).test(status)
    console.log(status, Pago)
    await updateInvoiceStatusUseCase.execute({ Nota_Fiscal, Pago });

    return res.status(201).send("Invoice Updated");
  }
}

export { UpdateInvoiceStatusController };
