import { User } from "@modules/users/infra/typeorm/entities/User"
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository"
import { AppErrors } from "@shared/errors/AppErrors"
import { inject, injectable } from "tsyringe"

@injectable()
class UpdateAdminUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
  }

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.find(id)

    if (!user) {
      throw new AppErrors('User Not Found')
    }

    let userStatus = user.Administrador

    userStatus === 'Nao' ? userStatus = 'Sim' : userStatus = 'Nao'

    await this.usersRepository.updateAdminStatus(id, userStatus)

    return user
  }
}

export { UpdateAdminUseCase }