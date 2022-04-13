import { ServiceWorker } from "../infra/typeorm/entities/ServiceWorker";

interface IServicesWorkesRepository {
  getAllBySigla(sigla?: string): Promise<ServiceWorker[]>;
}

export { IServicesWorkesRepository }