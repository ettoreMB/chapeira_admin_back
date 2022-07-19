import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository"
import { User } from "@modules/users/infra/typeorm/entities/User"
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository"
import { AppErrors } from "@shared/errors/AppErrors"
import { inject, injectable } from "tsyringe"

@injectable()
export class UserChekInUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ){}

  async execute({id, ip, browser}):Promise<User> {
    const userId = parseInt(id)
    const user = await this.userRepository.find(userId);

    if(!user) {
      throw new AppErrors('UseR Not Found', 404);
    }

    const date = new Intl.DateTimeFormat('pt-BR').format()

    user.CheckIn === 1 ? user.CheckIn = 0: user.CheckIn = 1 ;
    user.Status === 'Presente'? user.Status = 'Presente'  : user.Status = 'Ausente'
    user.CheckIn_Status === 'Presente' ? user.CheckIn_Status = 'Presente' : user.CheckIn_Status = 'Ausente'
    user.Acao === 'Chek Out' ? user.Acao = 'Chek In' : user.Acao = 'Chek Out'
    user.Cor === 'success' ? user.Cor = 'success' : user.Cor = 'Danger'
    user.CheckIn_Date = new Date()
    user.CheckIn_IP = ip
    user.CheckIn_Browser = browser
    await this.userRepository.checkIn(user);

    return user
  }
}