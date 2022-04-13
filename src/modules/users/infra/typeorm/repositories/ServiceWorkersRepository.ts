import { IServicesWorkesRepository } from "@modules/users/repositories/IServicesWorkesRepository";
import { getRepository, Repository } from "typeorm";
import { ServiceWorker } from "../entities/ServiceWorker";

class ServiceWorkesRepository implements IServicesWorkesRepository {
  private repository: Repository<ServiceWorker>;
  constructor() {
    this.repository = getRepository(ServiceWorker);
  }

  async getAllBySigla(sigla?: string): Promise<ServiceWorker[]> {
    const serviceWorkers = await this.repository.find({ Loja_Sigla: sigla });

    return serviceWorkers;
  }
}

export { ServiceWorkesRepository }