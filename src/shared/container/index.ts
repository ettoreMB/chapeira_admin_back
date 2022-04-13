import { InvoiceRepository } from "@modules/invoice/infra/typeorm/repositories/InvoiceRepository";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";

import { StoresRepository } from "@modules/stores/infra/typeorm/repositories/StoresRepository";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";

import { UniversesRepository } from "@modules/universes/infra/typeorm/repositories/UniversesRepository";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";


import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { ServiceWorkesRepository } from "@modules/users/infra/typeorm/repositories/ServiceWorkersRepository";
import { IServicesWorkesRepository } from "@modules/users/repositories/IServicesWorkesRepository";


import { VisitorsRepository } from "@modules/users/infra/typeorm/repositories/VisitorsRepository";
import { IVisitorsRepository } from "@modules/users/repositories/IVisitorsRepository";

import { container } from "tsyringe";


import "./providers/MailProvider"
// ICreateStore
container.registerSingleton<IStoresRepository>(
  "StoresRepository",
  StoresRepository
);

//InvoiceRepository
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

//VisitorsRepository
container.registerSingleton<IVisitorsRepository>(
  "VisitorsRepository",
  VisitorsRepository
);

//ServiceWorkesRepository
container.registerSingleton<IServicesWorkesRepository>(
  "ServiceWorkesRepository",
  ServiceWorkesRepository
)