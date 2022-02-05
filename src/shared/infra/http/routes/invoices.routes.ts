import { InvoiceRepository } from "@modules/invoice/infra/typeorm/repositories/InvoiceRepository";
import { CreateInvoiceController } from "@modules/invoice/UseCases/CreateInvoice/CreateInvoiceController";
import { DeleteInvoiceController } from "@modules/invoice/UseCases/DeleteInvoice/DeleteInvoiceController";
import { ImportInvoiceController } from "@modules/invoice/UseCases/ImportInvoices/ImportInvoiceController";
import { ListInvoicesController } from "@modules/invoice/UseCases/listInvoices/ListInvoicesController";
import { ListInvoiceByStoreController } from "@modules/invoice/UseCases/ListInvoicesByStore/ListInvoicesByStoreController";
import { SendEmailInvoicesController } from "@modules/invoice/UseCases/SendEmailInvoices/SendEmailInvoicesController";
import { UpdateInvoiceStatusController } from "@modules/invoice/UseCases/UpdateInvoiceStatus/UpdateInvoiceStatusController";
import { Router } from "express";
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});
const invoiceRoutes = Router();

const createinvoiceController = new CreateInvoiceController();
const deleteInvoiceController = new DeleteInvoiceController();
const importInvoiceController = new ImportInvoiceController();
const listInvoicesController = new ListInvoicesController();
const listInvoicesByStore = new ListInvoiceByStoreController();
const updateInvoiceStatusController = new UpdateInvoiceStatusController();

const sendInvoicesEmail = new SendEmailInvoicesController();
invoiceRoutes.get("/email", sendInvoicesEmail.handle);

invoiceRoutes.post("/", createinvoiceController.handle);

invoiceRoutes.post(
  "/import",
  upload.single("file"),
  importInvoiceController.handle
);

invoiceRoutes.get("/", listInvoicesController.handle);

invoiceRoutes.get("/store", listInvoicesByStore.handle);

invoiceRoutes.delete("/:nota", deleteInvoiceController.handle)

invoiceRoutes.patch("/:Nota_Fiscal", updateInvoiceStatusController.handle);

export { invoiceRoutes };
