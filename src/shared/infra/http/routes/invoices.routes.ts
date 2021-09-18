import { CreateInvoiceController } from "@modules/invoice/UseCases/CreateInvoice/CreateInvoiceController";
import { ImportInvoiceController } from "@modules/invoice/UseCases/ImportInvoices/ImportInvoiceController";
import { ListInvoicesController } from "@modules/invoice/UseCases/listInvoices/ListInvoicesController";
import { ListInvoiceByStoreController } from "@modules/invoice/UseCases/ListInvoicesByStore/ListInvoicesByStoreController";
import { Router } from "express";
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});
const invoiceRoutes = Router();

const createinvoiceController = new CreateInvoiceController();
const importInvoiceController = new ImportInvoiceController();
const listInvoicesController = new ListInvoicesController();
const listInvoicesByStore = new ListInvoiceByStoreController();

invoiceRoutes.post("/", createinvoiceController.handle);

invoiceRoutes.post(
  "/import",
  upload.single("file"),
  importInvoiceController.handle
);

invoiceRoutes.get("/", listInvoicesController.handle);

invoiceRoutes.get("/:Loja_Sigla", listInvoicesByStore.handle);

export { invoiceRoutes };
