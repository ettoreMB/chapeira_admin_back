import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateInvoiceStatusUseCase } from "./UpdateInvoiceStatusUseCase";

class UpdateInvoiceStatusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { Pendente, Pago } = req.body;
    const { Nota_Fiscal } = req.params;

    const updateInvoiceStatusUseCase = container.resolve(
      UpdateInvoiceStatusUseCase
    );
    await updateInvoiceStatusUseCase.execute({ Nota_Fiscal, Pendente, Pago });

    return res.status(201);
  }
}

export { UpdateInvoiceStatusController };
