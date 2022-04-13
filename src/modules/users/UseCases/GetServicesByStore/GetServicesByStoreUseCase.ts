import { injectable, inject } from "tsyringe";
import { ServiceWorker } from "@modules/users/infra/typeorm/entities/ServiceWorker";
import { IServicesWorkesRepository } from "@modules/users/repositories/IServicesWorkesRepository";

@injectable()
class GetServicesByStoreUseCase {
  constructor(
    @inject('ServiceWorkesRepository')
    private serviceWorkersRepository: IServicesWorkesRepository,
  ) { }


  async execute(sigla: string): Promise<ServiceWorker[]> {

    const serviceWorkers = await this.serviceWorkersRepository.getAllBySigla(sigla)
    return serviceWorkers
  }
}

export { GetServicesByStoreUseCase };