import { IEmergenciContactsRepoisitory } from "@modules/emergenciContacts/repositories/IEmergenciContacts";
import { getRepository, Repository } from "typeorm";
import { EmergenciContact } from "../entities/EmergenciContact";

export class EmergenciContactRepository implements IEmergenciContactsRepoisitory {
  private repository: Repository<EmergenciContact>
  constructor() {
   this.repository = getRepository(EmergenciContact);
  }
  async getAll(sigla: string): Promise<EmergenciContact[]> {
    const contacts = await this.repository.find({ where:{Loja_Sigla: sigla}});

    return contacts
  }
}