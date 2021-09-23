import { ICreateStoreDTO } from "../dtos/ICreateStoreDTO";
import { IEditStoreDTO } from "../dtos/IEditStoreDTO";
import { Store } from "../infra/typeorm/entities/Store";

interface IStoresRepository {
  create(data: ICreateStoreDTO): Promise<Store>;
  edit(id: number, data: IEditStoreDTO): Promise<Store>;
  delete(Loja_Sigla: string): Promise<void>;
  findByName(Loja: string): Promise<Store>;
  findByCnpj(CNPJ: number): Promise<Store>;
  findBySigla(Loja_Sigla: string): Promise<Store[]>;
  findById(id: number): Promise<Store>;
  list(): Promise<Store[]>;
}

export { IStoresRepository };
