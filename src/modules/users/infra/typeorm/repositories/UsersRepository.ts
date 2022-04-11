import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async find(id: string): Promise<User> {
    const user = await this.repository.findOne(id)
    return user
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
    });

    await this.repository.save(user);

    return user;
  }

  async getAllBySigla(sigla?: string, universe?: number): Promise<User[]> {

    if (universe) {
      const users = await this.repository.find({
        where: {
          Loja_Sigla: sigla,
          id_Universo: universe
        }
      })
      return users
    }
    const users = await this.repository.find({ Loja_Sigla: sigla })

    return users


  }

  async updateAdminStatus(id: string, Administrador: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ Administrador })
      .where("id = :id")
      .setParameters({ id })
      .execute()
  }
}

export { UsersRepository };
