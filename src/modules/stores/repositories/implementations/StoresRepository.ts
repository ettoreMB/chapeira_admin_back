import { getRepository, Repository } from "typeorm";
import { ICreateStoreDTO } from "../../dtos/ICreateStoreDTO";
import { Store } from "../../entities/Store";
import { IStoresRepository } from "../IStoreRepository";

class StoresRepository implements IStoresRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }
 
  async create({
    loja_sigla,
    loja_nome,
    loja_endereco,
    loja_cidade,
    loja_uf,
    loja_cnpj,
    loja_razaosocial,
    responsavel,
    responsavel_email,
    responsavel_telefone,
    ativo,
  }: ICreateStoreDTO): Promise<void> {
    const store = this.repository.create({ 
    loja_sigla,
    loja_nome,
    loja_endereco,
    loja_cidade,
    loja_uf,
    loja_cnpj,
    loja_razaosocial,
    responsavel,
    responsavel_email,
    responsavel_telefone,
    ativo,
    })

    await this.repository.save(store)
  }

  async list(): Promise<Store[]> {
    const stores = await this.repository.find();
    console.log(stores)
    return stores
  }

  async findByCnpj(loja_cnpj:string):Promise<Store> {
    const store = await this.repository.findOne({loja_cnpj})

    return store
  }
}

export { StoresRepository }