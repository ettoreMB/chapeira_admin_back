import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteInvoiceUseCase } from './DeleteInvoiceUseCase';


class DeleteInvoiceController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nota: Nota_Fiscal } = req.params;
    const deleteInvoceUseCase = container.resolve(DeleteInvoiceUseCase);

    await deleteInvoceUseCase.execute(Nota_Fiscal);

    return res.status(201).send();
  }
}

export { DeleteInvoiceController }