import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetTotalUsersUseCase {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(Loja_Sigla: string):Promise<any> {
    const total = await this.usersRepository.getTotalUsers(Loja_Sigla);

    return total
  }
}