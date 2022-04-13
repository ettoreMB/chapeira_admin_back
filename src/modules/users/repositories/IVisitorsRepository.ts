import { Visitor } from "../dto/VisitorsDTO";

interface IVisitorsRepository {
  listAllBySigla(sigla?: string): Promise<Visitor[]>;
}

export { IVisitorsRepository }