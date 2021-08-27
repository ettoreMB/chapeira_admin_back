import { Router } from "express";

import { invoiceRoutes } from "./invoices.routes";
import { storeRoutes } from "./store.routes";

const router = Router();

router.use("/stores", storeRoutes);

router.use("/invoices", invoiceRoutes);

export { router };
