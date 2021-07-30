"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateInvoice1625022110326 = void 0;

var _typeorm = require("typeorm");

class CreateInvoice1625022110326 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'faturas',
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "loja_Sigla",
        type: 'varchar'
      }, {
        name: "Nota_Fiscal",
        type: "varchar",
        isPrimary: true
      }, {
        name: "Data_Faturamento",
        type: "date"
      }, {
        name: "Valor_servicos",
        type: "int"
      }, {
        name: "Valor_Nota",
        type: "int"
      }, {
        name: "Data_Vencimento",
        type: "date"
      }, {
        name: "Data_Pagamento",
        type: "date",
        isNullable: true
      }, {
        name: "Pendente",
        type: "boolean",
        default: true
      }, {
        name: "Pago",
        type: "boolean",
        default: false
      }, {
        name: "Insert_Date",
        type: "timestamp",
        default: "now()"
      }]
    }));
    queryRunner.clearSqlMemory();
    await queryRunner.createForeignKey('faturas', new _typeorm.TableForeignKey({
      columnNames: ["loja_Sigla"],
      referencedColumnNames: ["loja_sigla"],
      referencedTableName: 'lojas',
      onDelete: "CASCADE"
    }));
  }

  async down(queryRunner) {
    const table = await queryRunner.getTable('faturas');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('loja_Sigla') !== -1);
    await queryRunner.dropForeignKey('faturas', foreignKey);
    await queryRunner.dropTable('faturas');
  }

}

exports.CreateInvoice1625022110326 = CreateInvoice1625022110326;