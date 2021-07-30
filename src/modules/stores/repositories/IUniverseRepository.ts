import { Universe } from "../entities/Universe";

interface IUniversesRepository {
  create(data: ICreateUniverseDTO):Promise<void>;
  findByName(universo_nome:string):Promise<Universe>;
}

export {IUniversesRepository}