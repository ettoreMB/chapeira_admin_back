import { ICreateUniverseDTO } from "../dto/CreateUniverseDTO";
import { Universe } from "../infra/typeorm/entities/Universe";

interface IUniversesRepository {
  create(data: ICreateUniverseDTO): Promise<void>;
  findBySigla(Loja_Sigla: string): Promise<Universe[]>;
}

export { IUniversesRepository };
