import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../errors/AppErrors";
import { UniversesRepository } from "../../repositories/implementations/UniverseRepository";


@injectable()
class CreateUniverseUseCase {

  constructor(
    @inject("UniversesRepostiory")
    private universesRepository: UniversesRepository
    ){}
  async execute({
    loja_sigla, zona, andar, universo_nome
  }:ICreateUniverseDTO):Promise<void> {
    
   const universoNome = universo_nome.toUpperCase()

    await this.universesRepository.create({
      loja_sigla,
      zona,
      andar,
      universo_nome: universoNome,
    })
  }
}

export { CreateUniverseUseCase}