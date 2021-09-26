import { CreateStoreController } from "@modules/stores/UseCases/CreateStore/CreateStoreController";
import { DeleteStoreController } from "@modules/stores/UseCases/deleteStore/deleteStoreController";
import { EditStoreController } from "@modules/stores/UseCases/EditStore/EditStoreController";
import { GetStoreBySiglaController } from "@modules/stores/UseCases/GetStoreBySigla/GetStoreBySiglaController";
import { ListStoreController } from "@modules/stores/UseCases/ListStores/ListStoresController";
import { StoreDashBoardController } from "@modules/stores/UseCases/StoreDashBoard/StoreDashBoardController";
import { StoreDashBoardBySiglaController } from "@modules/stores/UseCases/StoreDashBoardBySigla/StoreDashBoardBySiglaController";
import { Router } from "express";

const storeRoutes = Router();

const createStoreController = new CreateStoreController();
const listStoresController = new ListStoreController();
const getStoreBySiglaController = new GetStoreBySiglaController();
const deleteStoreController = new DeleteStoreController();
const editStoreController = new EditStoreController();
const storesDashBoardController = new StoreDashBoardController();
const storeDashBoardBySiglaUseCase = new StoreDashBoardBySiglaController();

storeRoutes.post("/", createStoreController.handle);
storeRoutes.get("/", listStoresController.handle);
storeRoutes.get("/dashboard", storesDashBoardController.handle);
storeRoutes.get("/dashboard/:sigla", storeDashBoardBySiglaUseCase.handle);
storeRoutes.get("/:sigla", getStoreBySiglaController.handle);
storeRoutes.delete("/:sigla", deleteStoreController.handle);
storeRoutes.put("/edit/:id", editStoreController.handle);

export { storeRoutes };
