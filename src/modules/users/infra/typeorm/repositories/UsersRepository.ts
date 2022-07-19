
import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async checkIn(user: any): Promise<any> {

    await this.repository.save(user)
    return user
  }
  
  async find(id: number): Promise<User> {
    const user = await this.repository.findOne(id)
    return user
  }

 async  getTotalUsers(sigla: string): Promise<any> {
    const users = await this.repository.find({
      where: {
        Loja_Sigla: sigla,
        Status: 'Presente'
      }
      
    })
    const colabs = users.filter(user => user.Tipo === 'Colaborador');
    const brigadista = users.filter(user => user.Tipo === 'Brigadista');
    const visitors = users.filter(user => user.Tipo === 'Visitante');
    const services = users.filter(user => user.Tipo === 'Terceiro');
    const total = {
      colaboradores: colabs.length,
      brigadistas: brigadista.length,
      visitantes: visitors.length,
      servicos: services.length
    }
    return total
  }

  async create({
    Loja_Sigla,
    Id_Universo,
    Nome,
    Funcao,
    Email,
    Administrador,
    Senha,
  }: ICreateUserDTO): Promise<User> {
    const user =
      this.repository.create({
        Loja_Sigla,
        Id_Universo,
        Nome,
        Funcao,
        Email,
        Administrador,
        Senha,
      });

    await this.repository.save(user);

    return user;
  }

  async getAllBySigla(sigla: string, universe?: number, type?: string): Promise<any> {

    if (universe) {
      if (universe === 0) {
        const users = await this.repository.find({
          where: {
            Loja_Sigla: sigla,
            Id_Universo: 0
          }
        })
        return users
      }
      const users = await this.repository.find({
        where: {
          Loja_Sigla: sigla,
          Id_Universo: universe
        }
      })
      return users

    }

    if (type) {
      const users = await this.repository.find({ where: { Loja_Sigla: sigla, Tipo: type } })
      return users
    }
    const users = await this.repository.find({ where: { Loja_Sigla: sigla } })
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
