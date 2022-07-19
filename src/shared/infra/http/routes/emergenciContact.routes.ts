import { getAllEmergenciContactsController } from "@modules/emergenciContacts/useCases/getAllContactsController";
import { Router } from "express";

export const emergenciContactsRoutes = Router()

const emergenciContactsController = new getAllEmergenciContactsController()

emergenciContactsRoutes.get('/:store', emergenciContactsController.handle)