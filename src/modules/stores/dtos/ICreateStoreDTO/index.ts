interface ICreateStoreDTO {
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

export {
  ICreateStoreDTO
}