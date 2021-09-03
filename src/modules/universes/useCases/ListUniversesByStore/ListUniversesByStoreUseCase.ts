import { Universe } from "@modules/universes/infra/typeorm/entities/Universe";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUniversesByStoreUseCase {
  constructor(
    @inject("UniversesRepository")
    private universesRepository: IUniversesRepository
  ) {}

  async execute(Loja_Sigla: string): Promise<Universe[]> {
    const universes = await this.universesRepository.findBySigla(Loja_Sigla);

    return universes;
  }
}

export { ListUniversesByStoreUseCase };
