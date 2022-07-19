import { Router } from "express";

import { invoiceRoutes } from "./invoices.routes";
import { storeRoutes } from "./store.routes";
import { universesRoutes } from "./universes.routes";
import { usersRoutes } from "./users.routes";
import { imagesRoutes} from "./images.routes"
import { emergenciContactsRoutes } from "./emergenciContact.routes";
const router = Router();

router.use("/stores", storeRoutes);

router.use("/invoices", invoiceRoutes);

router.use("/universes", universesRoutes);

router.use("/users", usersRoutes);

router.use("/images", imagesRoutes);

router.use("/emergenciContacts", emergenciContactsRoutes)

export { router };
