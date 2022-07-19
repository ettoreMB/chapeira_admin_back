
import { CreateUserController } from "@modules/users/UseCases/CreateUser/CreateUserController";
import { GetTotalUsersController } from "@modules/users/UseCases/GetTotalFromStore/GetTotalFromStoreController";
import { GetUsersbyStoreController } from "@modules/users/UseCases/GetUsersByStore/GetUsersbyStoreController";
import { UpdateAdminController } from "@modules/users/UseCases/UpdateAdmin/UpdateAdminController";
import { UserCheckinController } from "@modules/users/UseCases/UserChekIn/UserCheckInController";

import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersbyStoreController();
const updateAdminController = new UpdateAdminController();
const getTotalUsers = new GetTotalUsersController()
const userCheckinController =  new UserCheckinController()
// usersRoutes.get("/:sigla/:id", updateAdminController.handle)
usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:sigla", getUsersController.handle);
usersRoutes.get("/:sigla/total", getTotalUsers.handle);
usersRoutes.patch('/:id', userCheckinController.handle)


export { usersRoutes };
