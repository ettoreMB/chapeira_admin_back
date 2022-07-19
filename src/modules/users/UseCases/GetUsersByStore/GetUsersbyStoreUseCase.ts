import { Universe } from "@modules/universes/infra/typeorm/entities/Universe";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  sigla: string;
  universe?: number;
  type?: string;
}

@injectable()
class GetUsersBySiglaUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ sigla, universe, type }: IRequest): Promise<any> {
    const hasUniverse = Number.isNaN(universe)

    if (hasUniverse === false) {
      const users = await this.usersRepository.getAllBySigla(sigla, universe);
      return users
    }

    const users = await this.usersRepository.getAllBySigla(sigla, null,type);
 
    return users
  }
}

export { GetUsersBySiglaUseCase }