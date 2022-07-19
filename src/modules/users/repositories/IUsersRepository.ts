
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  find(id: number): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
  checkIn( user: any):Promise<any>;
  getAllBySigla(sigla: string, universe?: number, type?: string): Promise<User[]>;
  getTotalUsers(sigla: string):Promise<any>;
  updateAdminStatus(id: string, Administrador: string): Promise<void>;
}

export { IUsersRepository };
