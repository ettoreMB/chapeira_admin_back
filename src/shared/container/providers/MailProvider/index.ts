import { container } from "tsyringe";
import { IMailProvider } from "./IMailProvider";
import { OfficeMailProvider } from "./Implementations/OfficeMailProvider";


container.registerSingleton<IMailProvider>(
  "MailProvider",
  OfficeMailProvider
)