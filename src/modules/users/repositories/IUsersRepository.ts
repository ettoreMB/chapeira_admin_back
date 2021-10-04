
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository };
