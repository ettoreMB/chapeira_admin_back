import { ICreateUniverseDTO } from "../dto/CreateUniverseDTO";
import { Universe } from "../infra/typeorm/entities/Universe";

interface IUniversesRepository {
  create(data: ICreateUniverseDTO): Promise<Universe>;
  findById(id: number): Promise<Universe>;
}

export { IUniversesRepository };
