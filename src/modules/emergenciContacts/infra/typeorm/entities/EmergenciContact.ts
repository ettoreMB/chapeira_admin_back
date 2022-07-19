import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('tb_Contatos_Emergencia')
export class EmergenciContact {
  @PrimaryColumn()
  id: number;
  @Column()
  Loja_Sigla: string;
  @Column()
  Contato: string;
  @Column()
  Telefone: string;
  @Column()
  Descricao: string;
  @Column()
  Endereco: string;
  @CreateDateColumn()
  Insert_Date: Date;
  @UpdateDateColumn()
  Update_Date: Date;
  @Column()
  Update_User: string;


  constructor(){
    if(!this.Insert_Date) {
      this.Insert_Date = new Date();
    }
  }
}