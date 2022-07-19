import { EmergenciContact } from "../infra/typeorm/entities/EmergenciContact";

export interface IEmergenciContactsRepoisitory {
  getAll(sigla:string):Promise<EmergenciContact[]>
}