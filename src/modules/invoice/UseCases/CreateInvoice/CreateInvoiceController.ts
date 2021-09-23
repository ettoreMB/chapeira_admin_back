import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateInvoiceUseCase } from "./CreateInvoiceUseCase";

class CreateInvoiceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      Nota_Fiscal,
      Loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento,
    } = req.body;

    const createinvoiceUseCase = container.resolve(CreateInvoiceUseCase);

    await createinvoiceUseCase.execute({
      Nota_Fiscal,
      Loja_Sigla,
      Data_Faturamento,
      Valor_Servicos,
      Valor_Nota,
      Data_Vencimento,
    });

    return res.status(201).send(`Created Invoice ${Nota_Fiscal}`);
  }
}

export { CreateInvoiceController };
