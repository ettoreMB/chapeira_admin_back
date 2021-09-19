import { CreateInvoiceController } from "@modules/invoice/UseCases/CreateInvoice/CreateInvoiceController";
import { ImportInvoiceController } from "@modules/invoice/UseCases/ImportInvoices/ImportInvoiceController";
import { ListInvoicesController } from "@modules/invoice/UseCases/listInvoices/ListInvoicesController";
import { ListInvoiceByStoreController } from "@modules/invoice/UseCases/ListInvoicesByStore/ListInvoicesByStoreController";
import { UpdateInvoiceStatusController } from "@modules/invoice/UseCases/UpdateInvoiceStatus/UpdateInvoiceStatusController";
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
const updateInvoiceStatusController = new UpdateInvoiceStatusController();

invoiceRoutes.post("/", createinvoiceController.handle);

invoiceRoutes.post(
  "/import",
  upload.single("file"),
  importInvoiceController.handle
);

invoiceRoutes.get("/", listInvoicesController.handle);

invoiceRoutes.get("/store", listInvoicesByStore.handle);

invoiceRoutes.put("/:Nota_Fiscal", updateInvoiceStatusController.handle);

export { invoiceRoutes };
