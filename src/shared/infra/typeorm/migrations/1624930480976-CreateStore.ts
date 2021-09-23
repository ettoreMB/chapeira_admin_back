import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createStore1624459999511 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "lojas",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "Loja_Sigla",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "loja_nome",
            type: "varchar",
          },
          {
            name: "loja_endereco",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "loja_cidade",
            type: "varchar",
          },
          {
            name: "loja_uf",
            type: "varchar",
          },
          {
            name: "loja_cnpj",
            type: "varchar",
          },
          {
            name: "loja_razaosocial",
            type: "varchar",
            default: "'IGUASPORT'",
          },
          {
            name: "responsavel",
            type: "varchar",
          },
          {
            name: "responsavel_email",
            type: "varchar",
          },
          {
            name: "responsavel_telefone",
            type: "varchar",
          },
          {
            name: "ativo",
            type: "boolean",
            default: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("lojas");
  }
}
