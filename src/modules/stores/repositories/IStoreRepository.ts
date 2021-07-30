import { ICreateStoreDTO } from '../dtos/ICreateStoreDTO';
import { Store } from '../entities/Store';


interface IStoresRepository {
  create(data: ICreateStoreDTO): Promise<void>;
  findByCnpj(loja_cnpj: string):Promise<Store>;
  list():Promise<Store[]>;
}


export { IStoresRepository}