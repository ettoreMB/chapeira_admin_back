import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    Loja_Sigla,
    id_Universo,
    Nome,
    Funcao,
    Email,
    Administrador,
    Senha,
  }: ICreateUserDTO): Promise<User> {
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
