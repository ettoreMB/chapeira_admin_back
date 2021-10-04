import { Store } from "@modules/stores/infra/typeorm/entities/Store";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("tb_Lojas_Faturamentos")
class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nota_Fiscal: string;

  @Column()
  Loja_Sigla: string;

  @Column()
  Data_Faturamento: Date;

  @Column()
  Valor_Servicos: number;

  @Column()
  Valor_Nota: number;

  @Column()
  Data_Vencimento: Date;

  @Column()
  Data_Pagamento: Date;

  @Column()
  Valor_Recebido: number;

  @Column()
  Pendente: boolean;

  @Column()
  Pago: boolean;

  @Column()
  Cancelado: boolean;

  @Column()
  Observacoes: string;

  @CreateDateColumn()
  Insert_Date: Date;

  @CreateDateColumn()
  Update_Date: Date;

  // @ManyToOne((type) => Store, (store) => store.Loja_Sigla)
  // @JoinColumn({ name: "loja_Sigla", referencedColumnName: "Loja_Sigla" })
  // storeInvoices: Store;
}

export { Invoice };
