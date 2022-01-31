
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  getAllBySigla(sigla?: string): Promise<User[]>;
}

export { IUsersRepository };
