import { IVisitorsRepository } from "@modules/users/repositories/IVisitorsRepository"
import { inject, injectable } from "tsyringe"

@injectable()
class GetVisitorsByStoreUseCase {
  constructor(
    @inject('VisitorsRepository')
    private visitorsRepository: IVisitorsRepository,
  ) { }

  async execute(sigla: string) {
    const visitors = await this.visitorsRepository.listAllBySigla(sigla)
    return visitors
  }
}


export { GetVisitorsByStoreUseCase }