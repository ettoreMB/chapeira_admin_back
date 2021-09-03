import { ICreateStoreDTO } from "@modules/stores/dtos/ICreateStoreDTO";
import { IUniversesRepository } from "@modules/universes/repositories/IUniversesRepository";
import { inject, injectable } from "tsyringe";

import { AppErrors } from "../../../../shared/errors/AppErrors";
import { IStoresRepository } from "../../repositories/IStoreRepository";

interface IRequest {
  Loja_Sigla: string;
  CNPJ: number;
  Loja: string;
  Loja_Endereco: string;
  Loja_Cidade: string;
  Loja_UF: string;
  Loja_Telefone: string;
  Responsavel: string;
  Responsavel_Email: string;
  Responsavel_Telefone: string;
}

@injectable()
class CreateStoreUseCase {
  constructor(
    @inject("StoresRepository")
    private storesRepository: IStoresRepository,

    @inject("UniversesRepository")
    private universesRepository: IUniversesRepository
  ) {}

  async execute({
    Loja_Sigla,
    CNPJ,
    Loja,
    Loja_Endereco,
    Loja_Cidade,
    Loja_UF,
    Loja_Telefone,
    Responsavel,
    Responsavel_Email,
    Responsavel_Telefone,
  }: IRequest): Promise<void> {
    try {
      const storeAlreadyExistsCnpj = await this.storesRepository.findByCnpj(
        CNPJ
      );

      const storeAlreadyExistsSigla = await this.storesRepository.findBySigla(
        Loja_Sigla
      );

      const storeAlreadyExistsName = await this.storesRepository.findByName(
        Loja
      );

      if (
        storeAlreadyExistsCnpj ||
        storeAlreadyExistsSigla ||
        storeAlreadyExistsName
      ) {
        throw new AppErrors("Loja já Existe no sistema");
      }

      await this.storesRepository.create({
        Loja_Sigla,
        CNPJ,
        Loja,
        Loja_Endereco,
        Loja_Cidade,
        Loja_UF,
        Loja_Telefone,
        Responsavel,
        Responsavel_Email,
        Responsavel_Telefone,
      });

      await this.universesRepository.create({
        Universo: "Administração",
        Zona: "0",
        Andar: "0",
        Loja_Sigla,
      });
    } catch (error) {
      throw new AppErrors(error);
    }
  }
}

export { CreateStoreUseCase };
