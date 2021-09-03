import { Router } from "express";

import { invoiceRoutes } from "./invoices.routes";
import { storeRoutes } from "./store.routes";
import { universesRoutes } from "./universes.routes";

const router = Router();

router.use("/stores", storeRoutes);

router.use("/invoices", invoiceRoutes);

router.use("/universes", universesRoutes);

export { router };
