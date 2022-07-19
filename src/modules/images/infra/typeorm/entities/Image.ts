import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from "typeorm";

@Entity('tb_lojas_Imagens')
export class Image {
  @PrimaryColumn()
  id:number;
  @Column()
  Loja_Sigla: string;
  @Column()
  Titulo: string;
  @Column()
  Descricao:string;
  @Column()
  Imagem: string;
  @Column()
  Tamanho: number;
  @Column()
  Tipo: string;
  @CreateDateColumn()
  Insert_Date: Date;
  @Column()
  Insert_User: string;
  @Column()
  Update_Date: Date;
  @CreateDateColumn()
  Update_User: string;
}