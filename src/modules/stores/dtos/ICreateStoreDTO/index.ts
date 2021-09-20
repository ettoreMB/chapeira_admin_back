interface ICreateStoreDTO {
  id?: number;
  Loja_Sigla: string;
  Loja: string;
  Loja_Endereco: string;
  Loja_Cidade: string;
  Loja_UF: string;
  Loja_Telefone?: string;
  Responsavel: string;
  Responsavel_Email: string;
  Responsavel_Telefone: string;
  Adm_Email?: string;
  Faturamento_Responsavel?: string;
  Faturamento_Telefone?: string;
  Faturamento_Email?: string;
  CNPJ: number;
}

export { ICreateStoreDTO };
