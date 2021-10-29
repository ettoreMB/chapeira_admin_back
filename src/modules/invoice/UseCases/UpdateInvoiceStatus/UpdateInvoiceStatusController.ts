import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateInvoiceStatusUseCase } from "./UpdateInvoiceStatusUseCase";

class UpdateInvoiceStatusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { status, date } = req.query;
    const { Nota_Fiscal } = req.params;

    const updateInvoiceStatusUseCase = container.resolve(
      UpdateInvoiceStatusUseCase
    );
    const parseDate = new Date(String(date))
    let Pago = !!status
    await updateInvoiceStatusUseCase.execute({ Nota_Fiscal, Pago, parseDate });
    console.log(Pago, date)
    return res.status(201).send(`Invoice ${Nota_Fiscal} Updated`);
  }
}

export { UpdateInvoiceStatusController };
