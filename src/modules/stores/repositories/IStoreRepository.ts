import { DeleteResult } from "typeorm";

import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { Store } from "../infra/typeorm/entities/Store";

interface IStoresRepository {
  create(data: ICreateStoreDTO): Promise<void>;
  findByName(Loja: string): Promise<Store>;
  findByCnpj(CNPJ: number): Promise<Store>;
  findBySigla(Loja_Sigla: string): Promise<Store>;
  list(): Promise<Store[]>;
  delete(Loja_Sigla: string): Promise<void>;
}

export { IStoresRepository };
