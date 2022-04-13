import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";
import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppErrors } from "@shared/errors/AppErrors";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("StoresRepository")
    private storesRepository: IStoresRepository,
    @inject("UniversesRepository")
    private universesRepository: IUniversesRepository,
  ) { }


  async execute({
    Loja_Sigla,
    id_Universo,
    Nome,
    Funcao,
    Email,
    Administrador,
    Senha,
  }: ICreateUserDTO): Promise<User> {

    const store = await this.storesRepository.findBySigla(Loja_Sigla);
    const universe = await this.universesRepository.findById(id_Universo);

    if (!store) throw new AppErrors('Store does not Exists');
    if (!universe) throw new AppErrors('Universe Does Not Exists')

    const user = await this.usersRepository.create({
      Loja_Sigla,
      id_Universo,
      Nome,
      Funcao,
      Email,
      Administrador,
      Senha,
    });

    return user;
  }
}

export { CreateUserUseCase };
