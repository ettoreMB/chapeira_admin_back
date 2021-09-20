import { Invoice } from "@modules/invoice/infra/typeorm/entities/Invoice";

import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IEditStoreDTO } from "../dtos/IEditStoreDTO";
import { Store } from "../infra/typeorm/entities/Store";

interface IStoresRepository {
  create(data: ICreateStoreDTO): Promise<void>;
  edit(Loja_Sigla: string, data: IEditStoreDTO): Promise<Store>;
  delete(Loja_Sigla: string): Promise<void>;
  findByName(Loja: string): Promise<Store>;
  findByCnpj(CNPJ: number): Promise<Store>;
  findBySigla(Loja_Sigla: string): Promise<Store>;
  list(): Promise<Store[]>;
}

export { IStoresRepository };
