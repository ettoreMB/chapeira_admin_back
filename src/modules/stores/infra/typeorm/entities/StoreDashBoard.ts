import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_stores_dashboard")
class ViewStoreDashBoard {
  @ViewColumn()
  loja_Sigla: string;

  @ViewColumn()
  total_notas: number;

  @ViewColumn()
  total_notas_pendentes: number;

  @ViewColumn()
  total_notas_pagas: number;

  @ViewColumn()
  total_canceladas: number;
}

export { ViewStoreDashBoard };
