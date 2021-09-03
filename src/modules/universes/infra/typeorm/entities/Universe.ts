import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tb_Universos")
class Universe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_Key: string;

  @Column()
  Loja_Sigla: string;

  @Column()
  Zona: string;

  @Column()
  Andar: string;

  @Column()
  Universo: string;

  @CreateDateColumn()
  Insert_Date: Date;

  @Column()
  Insert_User: string;

  @CreateDateColumn()
  Update_Date: Date;

  @Column()
  Update_User: string;

  constructor() {
    if (!this.id_Key) {
      this.id_Key = uuidV4();
    }
  }
}

export { Universe };
