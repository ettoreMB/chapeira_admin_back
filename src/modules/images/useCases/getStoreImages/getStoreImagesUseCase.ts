import { inject, injectable } from "tsyringe";
import { IImagesRepository } from "@modules/images/repositories/IImagesRepository";
import { Image } from "@modules/images/infra/typeorm/entities/Image";


@injectable()
export class GetStoreImagesUseCase {
  constructor(
    @inject('ImagesRepository')
    private imageRepository: IImagesRepository
  ){}
  async execute(store):Promise<Image[]> {
    const images = await this.imageRepository.getImages(store);

    const imagesResult = images.map((image) => {
      return {
        nome: image.Titulo,
        imageType: image.Tipo,
        src: Buffer.from( image.Imagem, 'binary' ).toString('base64'),
        descricao: image.Descricao
      }
    })
    
    return imagesResult;
  }

}