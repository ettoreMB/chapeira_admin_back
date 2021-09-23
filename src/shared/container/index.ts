import { InvoiceRepository } from "@modules/invoice/infra/typeorm/repositories/InvoiceRepository";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { StoresRepository } from "@modules/stores/infra/typeorm/repositories/StoresRepository";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { UniversesRepository } from "@modules/universes/infra/typeorm/repositories/UniversesRepository";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";

// ICreateStore
container.registerSingleton<IStoresRepository>(
  "StoresRepository",
  StoresRepository
);

container.registerSingleton<IInvoiceRepository>(
  "InvoicesRepository",
  InvoiceRepository
);

// ICreateUniverse
container.registerSingleton<IUniversesRepository>(
  "UniversesRepository",
  UniversesRepository
);

// ICreateUser
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
