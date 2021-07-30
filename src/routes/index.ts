import { Router } from "express";
import { storeRoutes } from "./store.routes";
import { universeRoutes } from "./universes.routes";
import { invoiceRoutes} from "./invoices.routes"


const router = Router();

router.use('/stores', storeRoutes);
router.use('/universe', universeRoutes);
router.use('/invoices', invoiceRoutes);

export { router }
