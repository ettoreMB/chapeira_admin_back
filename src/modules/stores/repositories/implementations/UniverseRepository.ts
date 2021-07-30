import { getRepository, Repository } from "typeorm";
import { Universe } from "../../entities/Universe";
import { IUniversesRepository } from "../IUniverseRepository";

class UniversesRepository implements IUniversesRepository {
  private repository: Repository<Universe>;

  constructor(){
    this.repository = getRepository(Universe);
  }


  async create({
    loja_sigla,
    zona,
    andar,
    universo_nome,
  }:ICreateUniverseDTO): Promise<void> {
   const universe = this.repository.create({
    loja_sigla,
    zona,
    andar,
    universo_nome,
   })
    await this.repository.save(universe)
  }

  async findByName(universo_nome:string):Promise<Universe> {
    const universe = this.repository.findOne({universo_nome})

    return universe
  }
  

}


export{UniversesRepository}