import { CreateUniverseController } from "@modules/universes/useCases/CreateUniverse/CreateUniverseController";
import { ListUniversesByStoreController } from "@modules/universes/useCases/ListUniversesByStore/ListUniversesByStoreController";
import { Router } from "express";

const universesRoutes = Router();

const createUniverseController = new CreateUniverseController();
const listUniversesBySiglaController = new ListUniversesByStoreController();

universesRoutes.post("/", createUniverseController.handle);
universesRoutes.get("/:sigla", listUniversesBySiglaController.handle);


export { universesRoutes };
