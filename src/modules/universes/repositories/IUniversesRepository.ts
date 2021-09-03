import { ICreateUniverseDTO } from "../dto/CreateUniverseDTO";
import { Universe } from "../infra/typeorm/entities/Universe";

interface IUniversesRepository {
  create(data: ICreateUniverseDTO): Promise<void>;
}

export { IUniversesRepository };
