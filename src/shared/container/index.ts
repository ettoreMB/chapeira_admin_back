import { InvoiceRepository } from "@modules/invoice/infra/typeorm/repositories/InvoiceRepository";
import { IInvoiceRepository } from "@modules/invoice/repositories/IInvoiceRepository";
import { StoresRepository } from "@modules/stores/infra/typeorm/repositories/StoresRepository";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { container } from "tsyringe";

// ICreateStore
container.registerSingleton<IStoresRepository>(
  "StoresRepository",
  StoresRepository
);

container.registerSingleton<IInvoiceRepository>(
  "InvoicesRepostiory",
  InvoiceRepository
);
// ICreateUser

// ICreateNotaFiscal
