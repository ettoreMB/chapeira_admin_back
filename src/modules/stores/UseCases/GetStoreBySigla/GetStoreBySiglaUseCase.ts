import { inject, injectable } from "tsyringe";
import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";

import { AppErrors } from "@shared/errors/AppErrors";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

interface IRequest {
  Loja_Sigla?: string;
  Loja_Nome?: string;
}

@injectable()
class GetStoreBySiglaUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ Loja_Sigla, Loja_Nome }: IRequest): Promise<Store[]> {

    const store = await this.storesRepository.findBySigla(Loja_Sigla, Loja_Nome);
    if (!store){ throw new AppErrors("Store not Found");}
  
    
    return store

  }
}

export { GetStoreBySiglaUseCase };
