import { AppErrors } from "@shared/errors/AppErrors";
import { inject, injectable } from "tsyringe";
import { EmergenciContact } from "../infra/typeorm/entities/EmergenciContact";
import { IEmergenciContactsRepoisitory } from "../repositories/IEmergenciContacts";

@injectable()
export class GetAllEmergenciContactsUseCase {
  constructor(
    @inject('EmergenciContactsRepository')
    private emergenciContactsRepository: IEmergenciContactsRepoisitory,
  ) {

  }
  async execute(sigla: string):Promise<EmergenciContact[]> {
    if(!sigla) {
      throw new AppErrors('Sigla is not defined')
    }

    const contacts = await this.emergenciContactsRepository.getAll(sigla);

    return contacts
  }
}