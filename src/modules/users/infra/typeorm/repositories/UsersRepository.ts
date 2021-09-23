import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    Loja_Sigla,
    id_Universo,
    Nome,
    Funcao,
    Email,
    Administrador,
    Senha,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      Loja_Sigla,
      id_Universo,
      Nome,
      Funcao,
      Email,
      Administrador,
      Senha,
      Status: "Ausente",
    });

    await this.repository.save(user);

    return user;
  }
}

export { UsersRepository };
