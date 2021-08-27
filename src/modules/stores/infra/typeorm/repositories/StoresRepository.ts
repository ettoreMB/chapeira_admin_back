import { ICreateStoreDTO } from "@modules/stores/dtos/ICreateStoreDTO";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { getRepository, Repository } from "typeorm";

import { Store } from "../entities/Store";

class StoresRepository implements IStoresRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async create({
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
  }: ICreateStoreDTO): Promise<void> {
    const store = this.repository.create({
      Loja_Sigla,
      Loja,
      Loja_Endereco,
      Loja_Cidade,
      Loja_UF,
      Loja_Telefone,
      Responsavel,
      Responsavel_Email,
      Responsavel_Telefone,
      Adm_Email: Responsavel_Email,
      Faturamento_Responsavel: Responsavel,
      Faturamento_Email: Responsavel_Email,
      Faturamento_Telefone: Responsavel_Telefone,
      CNPJ,
    });

    await this.repository.save(store);
  }

  async list(): Promise<Store[]> {
    const stores = await this.repository.find();
    return stores;
  }

  async findByName(Loja: string): Promise<Store> {
    const store = await this.repository.findOne({ Loja });

    return store;
  }

  async findByCnpj(CNPJ: number): Promise<Store> {
    const store = await this.repository.findOne({ CNPJ });

    return store;
  }

  async findBySigla(Loja_Sigla: string): Promise<Store> {
    const store = await this.repository.findOne({ Loja_Sigla });

    return store;
  }
}

export { StoresRepository };
