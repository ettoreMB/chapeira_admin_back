interface ICreateUserDTO {
  Loja_Sigla: string;
  id_Universo: number;
  Nome: string;
  Funcao: string;
  Email: string;
  Ativo?: string;
  Administrador: string;
  Senha: string;
}

export { ICreateUserDTO };
