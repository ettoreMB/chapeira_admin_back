import { ViewColumn, ViewEntity } from "typeorm";
import { View } from "typeorm/schema-builder/view/View";

@ViewEntity("view_stores_dashboard")
class ViewStoreDashBoard {
  @ViewColumn()
  loja_Sigla: string;

  @ViewColumn()
  Responsavel: string;

  @ViewColumn()
  Responsavel_email: string;

  @ViewColumn()
  Loja_Uf: string;

  @ViewColumn()
  Ativo: boolean;

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
