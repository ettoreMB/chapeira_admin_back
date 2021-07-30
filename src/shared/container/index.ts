import { container } from 'tsyringe';
import { IInvoiceRepository } from '../../modules/invoice/repositories/IInvoiceRepository';
import { InvoiceRepository } from '../../modules/invoice/repositories/implementation/InvoiceRepository';
import { StoresRepository } from '../../modules/stores/repositories/implementations/StoresRepository';
import { UniversesRepository } from '../../modules/stores/repositories/implementations/UniverseRepository';
import { IStoresRepository } from '../../modules/stores/repositories/IStoreRepository';
import { IUniversesRepository } from '../../modules/stores/repositories/IUniverseRepository';

//ICreateStore
container.registerSingleton<IStoresRepository>(
  "StoresRepository",
  StoresRepository
)
//ICreateUniverse
container.registerSingleton<IUniversesRepository>(
  "UniversesRepostiory",
  UniversesRepository
)

container.registerSingleton<IInvoiceRepository>(
  "InvoicesRepostiory",
  InvoiceRepository
)
//ICreateUser

//ICreateNotaFiscal