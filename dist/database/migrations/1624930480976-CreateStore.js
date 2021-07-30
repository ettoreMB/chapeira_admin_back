"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore1624459999511 = void 0;

var _typeorm = require("typeorm");

class createStore1624459999511 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'lojas',
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "loja_sigla",
        type: "varchar",
        isUnique: true
      }, {
        name: "loja_nome",
        type: "varchar"
      }, {
        name: "loja_endereco",
        type: "varchar",
        isNullable: true
      }, {
        name: 'loja_cidade',
        type: "varchar"
      }, {
        name: "loja_uf",
        type: "varchar"
      }, {
        name: "loja_cnpj",
        type: "varchar"
      }, {
        name: "loja_razaosocial",
        type: "varchar",
        default: "'IGUASPORT'"
      }, {
        name: "responsavel",
        type: "varchar"
      }, {
        name: "responsavel_email",
        type: "varchar"
      }, {
        name: "responsavel_telefone",
        type: "varchar"
      }, {
        name: "ativo",
        type: "boolean",
        default: true
      }, {
        name: 'createdAt',
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('lojas');
  }

}

exports.createStore1624459999511 = createStore1624459999511;