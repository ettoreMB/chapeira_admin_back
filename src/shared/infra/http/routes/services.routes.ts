import { GetServicesByStoreController } from "@modules/users/UseCases/GetServicesByStore/GetServicesByStoreController";
import { GetServicesByStoreUseCase } from "@modules/users/UseCases/GetServicesByStore/GetServicesByStoreUseCase";
import { Router } from "express";
import { container } from "tsyringe";

const servicesRoutes = Router();

const serviceWorkesController = new GetServicesByStoreController();

servicesRoutes.get("/:sigla", serviceWorkesController.handle);

export { servicesRoutes };