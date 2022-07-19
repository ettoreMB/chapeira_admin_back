import { Router } from 'express';

import { GetStoreImagesController } from '@modules/images/useCases/getStoreImages/getStoreImagesController';


const imagesRoutes = Router()
const getStoreImagesController = new GetStoreImagesController();


imagesRoutes.get('/:store', getStoreImagesController.handle);

export { imagesRoutes}