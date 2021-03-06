interface ICreateInvoiceDTO {
  Loja_Sigla: string;
  Nota_Fiscal: string;
  Data_Faturamento: Date;
  Valor_Servicos: number;
  Valor_Nota: number;
  Data_Vencimento: Date;
  Data_Pagamento?: Date;
}

export { ICreateInvoiceDTO };
