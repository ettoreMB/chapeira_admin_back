import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetStoreImagesUseCase } from "./getStoreImagesUseCase";

export class GetStoreImagesController {
  async handle(req: Request, res: Response):Promise<Response> {
    const {store} = req.params;
    
    const getStoreImagesUsecase = container.resolve(GetStoreImagesUseCase);

    const images = await getStoreImagesUsecase.execute(store);

    return res.status(200).json(images);
  }
}