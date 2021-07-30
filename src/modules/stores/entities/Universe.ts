import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("universos")
class Universe {

  @PrimaryColumn()
  id?: string;

  @Column()
  id_key?: string;

  @Column()
  loja_sigla: string;

  @Column()
  zona: string;

  @Column()
  andar: string;

  @Column()
  universo_nome: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;


  constructor() {
    if(!this.id_key)
    this.id_key= uuidV4();
  }
}

export { Universe}