import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { User } from "../../entities/User";
import { usersMock } from '../../../../../../mocks/users'
export class UsersRepositoryInMemory implements IUsersRepository {
 
  users: User[] = usersMock

  find(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  create(data: ICreateUserDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async getAllBySigla(sigla: string, universe?: number): Promise<User[]> {
    const users = this.users.filter((user) => (user.Loja_Sigla === sigla))

    if (universe) {
      const users = this.users.filter((user) => (
        user.Loja_Sigla === sigla && user.Id_Universo === universe
      ))
      return users
    }
    return users
  }
  updateAdminStatus(id: string, Administrador: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}