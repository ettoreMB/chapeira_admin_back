import { GetVisitorsByStoreController } from '@modules/users/UseCases/GetVisitorsByStore/GetVisitorsByStoreController';
import { Router } from 'express';

const visitorsRoutes = Router();

const getvisitorsByStoreController = new GetVisitorsByStoreController()

visitorsRoutes.get("/:sigla", getvisitorsByStoreController.handle)

export { visitorsRoutes }