import { ICreateStoreDTO } from "@modules/stores/dtos/ICreateStoreDTO";
import { IEditStoreDTO } from "@modules/stores/dtos/IEditStoreDTO";
import { IStoresRepository } from "@modules/stores/repositories/IStoreRepository";
import { getRepository, Repository } from "typeorm";

import { Store } from "../entities/Store";

class StoresRepository implements IStoresRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async delete(Loja_Sigla: string): Promise<void> {
    const store = await this.repository.findOne({ Loja_Sigla });
    await this.repository.remove(store);
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
  }: ICreateStoreDTO): Promise<Store> {
    const store = this.repository.create({
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
      Adm_Email: Responsavel_Email,
      Faturamento_Responsavel: Responsavel,
      Faturamento_Email: Responsavel_Email,
      Faturamento_Telefone: Responsavel_Telefone,
    });
    await this.repository.save(store);

    return store;
  }

  async edit(id: number, data: IEditStoreDTO): Promise<Store> {
    await this.repository.update(id, {
      Loja: data.Loja,
      Loja_Endereco: data.Loja_Endereco,
      Loja_Cidade: data.Loja_Cidade,
      Loja_UF: data.Loja_UF,
      Loja_Telefone: data.Loja_Telefone,
      Responsavel: data.Responsavel,
      Responsavel_Email: data.Responsavel_Email,
      Responsavel_Telefone: data.Responsavel_Telefone,
      Adm_Email: data.Responsavel_Email,
      Faturamento_Responsavel: data.Responsavel,
      Faturamento_Email: data.Responsavel_Email,
      Faturamento_Telefone: data.Responsavel_Telefone,
      CNPJ: data.CNPJ,
    });

    return this.repository.findOne({ id });
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
    const store = await this.repository.findOne({
      where: { Loja_Sigla },
      // relations: ["invoices"],
    });

    return store;
  }

  async findById(id: number): Promise<Store> {
    const store = await this.repository.findOne({
      where: { id },
    });

    return store;
  }
}

export { StoresRepository };
