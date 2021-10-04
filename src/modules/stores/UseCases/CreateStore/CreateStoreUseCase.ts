import { ICreateStoreDTO } from "@modules/stores/dtos/ICreateStoreDTO";
import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "../../../../shared/errors/AppErrors";
import { IStoresRepository } from "../../repositories/IStoreRepository";

@injectable()
class CreateStoreUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository,

    @inject("UniversesRepository")
    private universesRepository: IUniversesRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    Loja_Sigla,
    CNPJ,
    Loja,
    Loja_Endereco,
    Loja_Cidade,
    Loja_UF,
    Loja_Telefone,
    Responsavel,
    Responsavel_Email,
    Responsavel_Telefone,
  }: ICreateStoreDTO): Promise<Store> {
    const storeAlreadyExistsCnpj = await this.storesRepository.findByCnpj(CNPJ);

    const storeAlreadyExistsSigla = await this.storesRepository.findBySigla(
      Loja_Sigla
    );

    const storeAlreadyExistsName = await this.storesRepository.findByName(Loja);

    if (storeAlreadyExistsCnpj) {
      throw new AppErrors("Cnpj Já Cadasatrado");
    }
    if (storeAlreadyExistsSigla) {
      throw new AppErrors("Sigla Já Cadasatrado");
    }
    if (storeAlreadyExistsName) {
      throw new AppErrors("Nome Já Cadasatrado");
    }

    const store = await this.storesRepository.create({
      Loja_Sigla,
      CNPJ,
      Loja,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone,
    });

    const universe = await this.universesRepository.create({
      Universo: "Administração",
      Zona: "0",
      Andar: "0",
      Loja_Sigla,
    });

    await this.usersRepository.create({
      Loja_Sigla,
      id_Universo: universe.id,
      Nome: Responsavel,
      Funcao: "Administrador",
      Email: Responsavel_Email,
      Administrador: "Sim",
      Ativo: "Nao",
      Senha: "chapeira@chapeira",
    });

    return store;
  }
}

export { CreateStoreUseCase };
