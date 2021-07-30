import { inject, injectable } from "tsyringe";
import { Store } from "../../entities/Store";
import { IStoresRepository } from "../../repositories/IStoreRepository";


@injectable()
class ListStoresUseCase {

  constructor(
    @inject('StoresRepository')
    private storesStoreUseCase: IStoresRepository
  ){}
  async execute():Promise<Store[]>{
    const stores = await this.storesStoreUseCase.list();
    
    return stores
  }
}

export {ListStoresUseCase} 