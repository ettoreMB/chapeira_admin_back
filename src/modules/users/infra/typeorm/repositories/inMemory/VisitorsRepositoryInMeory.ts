import { Visitor } from "@modules/users/dto/VisitorsDTO";
import { IVisitorsRepository } from "@modules/users/repositories/IVisitorsRepository";
import { BaseRepostiory } from "@utils/baseRepository";
import { readFile } from 'fs/promises'
import path from 'path'



class VisitorsRepositoryInMemory implements IVisitorsRepository {
  visitantesRepository: any;
  visitorsData: {}
  async getData(): Promise<any> {
    const data = JSON.parse(await readFile(path.resolve('Database', 'Visitantes.json'), { encoding: 'utf8' }))
    return data
  }
  async listAllBySigla(sigla?: any): Promise<[]> {
    const visitors = await this.getData();
    const filteresVisotors = visitors.filter((visitor: { Loja_Sigla: string }) => { return visitor.Loja_Sigla === sigla })
    return filteresVisotors
  }

}

export { VisitorsRepositoryInMemory }