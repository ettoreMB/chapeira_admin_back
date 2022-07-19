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
  Id_Key: string;

  @Column()
  Loja_Sigla: string;

  @Column()
  Id_Universo: number;

  @Column()
  Nome: string;

  @Column()
  Funcao_Sigla: string;

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
  Jornada_Sigla: string;

  @Column()
  Senha: string;

  @Column()
  Insert_Date: string;

  @Column()
  Insert_User: string;

  @Column()
  Update_Date: string;

  @Column()
  Update_User: string;

  @Column()
  Acao: string;

  @Column()
  Cor: string;

  // @Column({select: false})
  // Qtd_Colaborador: number;
  // @Column({select: false})
  // Qtd_Brigadista: number;
  // @Column({select: false})
  // Qtd_Nao_Brigadista: number;
  // @Column({select: false})
  // Qtd_Terceiro: number;
  // @Column({select: false})
  // Qtd_Visitante: number;
  // @Column({select: false})
  // Qtd_Presente: number;
  // @Column({select: false})
  // Qtd_Ausente: number;
  // @Column({select: false})
  // Qtd_Ativo: number;

  constructor() {
    if (!this.Id_Key) {
      this.Id_Key = uuidV4();
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
