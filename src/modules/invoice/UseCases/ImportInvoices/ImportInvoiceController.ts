import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportInvoiceUseCase } from "./ImportInvoiceUseCase";

class ImportInvoiceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importInvoiceUseCase = container.resolve(ImportInvoiceUseCase);

    await importInvoiceUseCase.execute(file);

    return res.send("success");
  }
}
const teste = '123'
console.log('teste')

export { ImportInvoiceController };
