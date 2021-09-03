import { inject, injectable } from "tsyringe";

import { Universe } from "../infra/typeorm/entities/Universe";
import { IUniversesRepository } from "../repositories/IUniversesRepository";

interface IRequest {
  Loja_Sigla: string;
  Andar: string;
  Zona: string;
  Universo: string;
}

@injectable()
class CreateUniverseUseCase {
  constructor(
    @inject("UniversesRepository")
    private univeresRepository: IUniversesRepository
  ) {}

  async execute({
    Loja_Sigla,
    Andar,
    Zona,
    Universo,
  }: IRequest): Promise<void> {
    try {
      await this.univeresRepository.create({
        Loja_Sigla,
        Andar,
        Zona,
        Universo,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { CreateUniverseUseCase };
