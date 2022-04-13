
import { IVisitorsRepository } from "@modules/users/repositories/IVisitorsRepository";
import { getRepository, Repository } from "typeorm";
import { Visitor } from "../entities/Visitors";

class VisitorsRepository implements IVisitorsRepository {
  private repository: Repository<Visitor>;

  constructor() {
    this.repository = getRepository(Visitor);
  }
  async listAllBySigla(sigla?: string): Promise<Visitor[]> {
    const visitors = await this.repository.find({ Loja_Sigla: sigla })
    return visitors
  }
}

export { VisitorsRepository };