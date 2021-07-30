import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("lojas")
class Store {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  Loja_Sigla:string;

  @Column()
  Razao_Social:string;

  @Column()
  Loja:string;

  @Column()
  Loja_Endereco:string;

  @Column()
  Loja_Cidade:string;

  @Column()
  Loja_UF:string;

  @Column()
  Loja_Telefone:string;

  @Column()
  Loja_Horario:string;

  @Column()
  Loja_Grupo:string;

  @Column()
  Ativo: string;

  @Column()
  Responsavel:string;

  @Column()
  Responsavel_Email: string;

  @Column()
  Responsavel_Telefone: string;


  @Column()
  loja_cnpj:string;


  @CreateDateColumn()
  createdAt: Date;

}

export { Store }