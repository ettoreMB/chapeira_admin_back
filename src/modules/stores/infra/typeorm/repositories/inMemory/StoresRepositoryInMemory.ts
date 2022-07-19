import { ICreateStoreDTO } from "@modules/stores/dtos/ICreateStoreDTO";
import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { Store } from "../../entities/Store";
import inMemoryData from '../../../../../../mocks/validStore.json'
import { stores } from "./storesInMemory";

class StoreRepositoryInMemory implements IStoresRepository {

  stores: Store[] = stores
  create(data: ICreateStoreDTO): Promise<Store> {
    throw new Error("Method not implemented.");
  }
  edit(data: IEditStoreDTO): Promise<Store> {
    throw new Error("Method not implemented.");
  }
  delete(Loja_Sigla: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findByName(Loja: string): Promise<Store> {
    throw new Error("Method not implemented.");
  }
  findByCnpj(CNPJ: number): Promise<Store> {
    throw new Error("Method not implemented.");
  }
  async findBySigla(Loja_Sigla?: string, Loja_nome?: string): Promise<any> {
    const stores = this.stores;
    if (Loja_Sigla) {
      const store = this.stores.find((store) => store.Loja_Sigla === Loja_Sigla);
      return store
    }
    if (Loja_nome) {
      const store = this.stores.find(store => store.Pasta_WEB === Loja_nome);
      return store
    }
    return stores
  }
  findById(id: number): Promise<Store> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Store[]> {
    throw new Error("Method not implemented.");
  }
}

export { StoreRepositoryInMemory }