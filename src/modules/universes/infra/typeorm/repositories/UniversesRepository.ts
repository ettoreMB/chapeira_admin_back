import { ICreateUniverseDTO } from "@modules/universes/dto/CreateUniverseDTO";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";
import { getRepository, Repository } from "typeorm";

import { Universe } from "../entities/Universe";

class UniversesRepository implements IUniversesRepository {
  private repository: Repository<Universe>;

  constructor() {
    this.repository = getRepository(Universe);
  }

  async create({
    Loja_Sigla,
    Universo,
    Andar,
    Zona,
  }: ICreateUniverseDTO): Promise<Universe> {
    const universe = this.repository.create({
      Loja_Sigla,
      Universo,
      Andar,
      Zona,
    });

    await this.repository.save(universe);

    return universe;
  }

  async findById(id: number): Promise<Universe> {
    const universe = await this.repository.findOne({ id });

    return universe;
  }
}

export { UniversesRepository };
