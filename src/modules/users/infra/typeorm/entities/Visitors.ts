import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
@Entity('tb_Visitantes')
class Visitor {
  @Column()
  Id_key: string;
  @PrimaryColumn()
  id: number;
  @Column()
  Loja_Sigla: string;
  @Column()
  Nome: string;
  @Column()
  Email: string;
  @Column()
  Telefone: string;
  @Column()
  Endereco: string;
  @Column()
  Cidade: string;
  @Column()
  UF: string;
  @Column()
  Empresa: string;
  @Column()
  Destino: string;
  @Column()
  Motivo: string;
  @Column()
  Observacao: string;
  @Column()
  CheckIn: number;
  @CreateDateColumn()
  CheckIn_Date: Date;
  @Column()
  CheckIn_status: string;
  @Column()
  Status: string;
  @Column()
  Ativo: string;
  @CreateDateColumn()
  Insert_Date: Date;
  @Column()
  Insert_User: string;
  @UpdateDateColumn()
  Update_Date: Date;
  @Column()
  Update_User: string;
  @Column()
  Acao: string;
  @Column()
  Cor: string;
}

export { Visitor }