import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('tb_Terceiros')
class ServiceWorker {
  @Column()
  id_Key: string;
  @PrimaryColumn()
  Id: number;
  @Column()
  Loja_Sigla: string;
  @Column()
  Nome: string;
  @Column()
  Funcao: string;
  @Column()
  Empresa: string;
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
  Tipo: string;
  @Column()
  Observacao: string;
  @Column()
  Checkin: number;
  @Column()
  CheckIn_Date: Date;
  @Column()
  CheckIn_Status: string;
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

export { ServiceWorker };