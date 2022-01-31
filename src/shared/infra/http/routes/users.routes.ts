
import { CreateUserController } from "@modules/users/UseCases/CreateUse/CreateUserController";
import { GetUsersbyStoreController } from "@modules/users/UseCases/GetUsersByStore/GetUsersbyStoreController";
import { UpdateAdminController } from "@modules/users/UseCases/UpdateAdmin/UpdateAdminController";

import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersbyStoreController();
const updateAdminController = new UpdateAdminController();

usersRoutes.get("/:id", updateAdminController.handle)
usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", getUsersController.handle);

export { usersRoutes };
