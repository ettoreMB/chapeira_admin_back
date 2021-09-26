import { ViewStoreDashBoard } from "../infra/typeorm/entities/StoreDashBoard";

interface IStoresDashBoardRepository {
  list(): Promise<ViewStoreDashBoard[]>;
  getBySigla(loja_Sigla: string): Promise<ViewStoreDashBoard>;
}

export { IStoresDashBoardRepository };
