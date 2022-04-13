import { Router } from "express";
import { authorizationRouter } from "./authorization.routes";

import { invoiceRoutes } from "./invoices.routes";
import { servicesRoutes } from "./services.routes";
import { storeRoutes } from "./store.routes";
import { universesRoutes } from "./universes.routes";
import { usersRoutes } from "./users.routes";
import { visitorsRoutes } from './visitors.routes'

const router = Router();

router.use("/stores", storeRoutes);

router.use("/invoices", invoiceRoutes);

router.use("/universes", universesRoutes);

router.use("/users", usersRoutes);

router.use("/visitors", visitorsRoutes);

router.use("/services", servicesRoutes);

router.use("/auth", authorizationRouter);

export { router };
