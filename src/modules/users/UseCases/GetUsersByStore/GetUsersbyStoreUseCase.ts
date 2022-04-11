import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  sigla: string
  universe: number
}

@injectable()
class GetUsersBySiglaUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ sigla, universe }: IRequest): Promise<User[]> {
    const users = this.usersRepository.getAllBySigla(sigla, universe);
    return users
  }
}

export { GetUsersBySiglaUseCase }