import { CreateUniverseController } from "@modules/universes/useCases/CreateUniverseController";
import { Router } from "express";

const universesRoutes = Router();

const createUniverseController = new CreateUniverseController();

universesRoutes.post("/", createUniverseController.handle);

export { universesRoutes };
