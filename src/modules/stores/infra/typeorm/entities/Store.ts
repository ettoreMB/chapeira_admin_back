import { Invoice } from "@modules/invoice/infra/typeorm/entities/Invoice";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinColumn,
  JoinTable,
  ManyToOne,
} from "typeorm";

@Entity("tb_Lojas")
class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Loja_Sigla: string;

  @Column()
  Razao_Social: string;

  @Column()
  Loja: string;

  @Column()
  Loja_Endereco: string;

  @Column()
  Loja_Cidade: string;

  @Column()
  Loja_UF: string;

  @Column()
  Loja_Telefone: string;

  @Column()
  Loja_Horario: string;

  @Column()
  Loja_Grupo: string;

  @Column()
  Ativo: string;

  @Column()
  Responsavel: string;

  @Column()
  Responsavel_Email: string;

  @Column()
  Responsavel_Telefone: string;

  @Column()
  Adm_Email: string;

  @Column()
  Adm_Senha: string;

  @Column()
  Pasta_WEB: string;

  @Column()
  URL: string;

  @Column()
  Faturamento_Inicio: Date;

  @Column()
  Faturamento_Responsavel: string;

  @Column()
  Faturamento_Email: string;

  @Column()
  Faturamento_Telefone: string;

  @Column()
  Faturar: boolean;

  @Column()
  CNPJ: number;

  @Column()
  Inscricao_Estadual: string;

  @Column()
  Tablets: number;

  @CreateDateColumn()
  Insert_Date: Date;

  @Column()
  Insert_User: string;

  @Column()
  Update_Date: Date;

  @Column()
  Update_User: Date;

  // @OneToMany(() => Invoice, (invoice) => invoice.storeInvoices)
  // invoices: Invoice[];

  constructor() {
    if (!this.Faturar) {
      this.Faturar = true;
    }

    if (!this.Razao_Social) {
      this.Razao_Social = "IGUASPORT LTDA";
    }
  }
}

export { Store };
