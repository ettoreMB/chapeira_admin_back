
import { CreateUserController } from "@modules/users/UseCases/CreateUse/CreateUserController";
import { GetUsersbyStoreController } from "@modules/users/UseCases/GetUsersByStore/GetUsersbyStoreController";

import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersbyStoreController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", getUsersController.handle);

export { usersRoutes };
