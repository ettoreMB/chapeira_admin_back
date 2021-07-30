import { Router } from "express";
import { CreateStoreController } from "../modules/stores/UseCases/CreateStore/CreateStoreController";
import { ListStoreController } from "../modules/stores/UseCases/ListStores/ListStoresController";
const storeRoutes = Router();


const createStoreController = new CreateStoreController();
const listStoresController = new ListStoreController();

storeRoutes.post('/', createStoreController.handle);
storeRoutes.get('/', listStoresController.handle);

export { storeRoutes }