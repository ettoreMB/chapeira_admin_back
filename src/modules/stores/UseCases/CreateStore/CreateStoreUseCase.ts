import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../errors/AppErrors";
import { IStoresRepository } from "../../repositories/IStoreRepository";

interface IRequest {
  loja_sigla: string;
  loja_nome: string;
  loja_endereco: string;
  loja_cidade: string;
  loja_uf:string;
  loja_cnpj:string;
  loja_razaosocial: string;
  responsavel:string;
  responsavel_email:string;
  responsavel_telefone:string;
  ativo: boolean;
}

@injectable()
class CreateStoreUseCase {
  constructor(
  @inject("StoresRepository")    
    private storesRepository: IStoresRepository) {}

  async execute({
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
    }: IRequest): Promise<void> {

    const store = await this.storesRepository.findByCnpj(loja_cnpj);

    if(store) {
      throw new AppErrors('Loja Ja existe no sistema')
    }

   await this.storesRepository.create({
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
    });
  }
}

export { CreateStoreUseCase }