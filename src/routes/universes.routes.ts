import { Router } from "express";
import { CreateUniverController } from "../modules/stores/UseCases/CreateUniverse/CreateUniverseController copy";

const universeRoutes = Router();

const createUniverseController = new CreateUniverController



universeRoutes.post('/', createUniverseController.handle);

export { universeRoutes }