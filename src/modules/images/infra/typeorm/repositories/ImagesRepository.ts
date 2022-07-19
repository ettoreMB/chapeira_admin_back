import { IImagesRepository } from "@modules/images/repositories/IImagesRepository";
import { getRepository, Repository } from "typeorm";
import { Image } from "../entities/Image";

export class ImagesRepository implements IImagesRepository{
  private repository: Repository<Image>;

  constructor() {
    this.repository = getRepository(Image)
  }
  async getImages(store: any): Promise<any> {
    const images = await this.repository.find({where: {
      Loja_Sigla: store
    }})
    return images
  }
}