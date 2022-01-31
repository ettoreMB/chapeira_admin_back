
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  find(id: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
  getAllBySigla(sigla?: string): Promise<User[]>;
  updateAdminStatus(id: string, Administrador: string): Promise<void>;
}

export { IUsersRepository };
