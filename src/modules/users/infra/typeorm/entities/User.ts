import { Universe } from "@modules/universes/infra/typeorm/entities/Universe";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tb_Colaboradores")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_Key: string;

  @Column()
  Loja_Sigla: string;

  @Column()
  id_Universo: number;

  @Column()
  Nome: string;

  @Column()
  Funcao: string;

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
  Empresa: string;

  @Column()
  Brigadista: string;

  @Column()
  Formacao_Data: string;

  @Column()
  Admissao_Data: string;

  @Column()
  Observacao: string;

  @Column()
  CheckIn: number;

  @Column()
  CheckIn_Date: Date;

  @Column()
  CheckIn_Status: string;

  @Column()
  CheckIn_IP: string;

  @Column()
  CheckIn_Browser: string;

  @Column()
  CheckIn_Session: string;

  @Column()
  Status: string;

  @Column()
  Ativo: string;

  @Column()
  Administrador: string;

  @Column()
  Senha: string;

  @CreateDateColumn()
  Insert_Date: Date;

  @Column()
  Update_Date: Date;

  @Column()
  Update_User: string;

  @Column()
  Acao: string;

  @Column()
  Cor: string;

  constructor() {
    if (!this.id_Key) {
      this.id_Key = uuidV4();
    }

    if (!this.Administrador) {
      this.Administrador = "Sim";
    }

    if (!this.Tipo) {
      this.Tipo = "Colaborador";
    }

    if (!this.Status) {
      this.Status = "Nao";
    }


  }
}

export { User };
