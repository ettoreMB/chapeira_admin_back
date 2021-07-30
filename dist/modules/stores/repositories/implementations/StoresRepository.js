"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoresRepository = void 0;

var _typeorm = require("typeorm");

var _Store = require("../../entities/Store");

class StoresRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Store.Store);
  }

  async create({
    loja_sigla,
    loja_nome,
    loja_endereco,
    loja_cidade,
    loja_uf,
    loja_cnpj,
    loja_razaosocial,
    responsavel,
    responsavel_email,
    responsavel_telefone,
    ativo
  }) {
    const store = this.repository.create({
      loja_sigla,
      loja_nome,
      loja_endereco,
      loja_cidade,
      loja_uf,
      loja_cnpj,
      loja_razaosocial,
      responsavel,
      responsavel_email,
      responsavel_telefone,
      ativo
    });
    await this.repository.save(store);
  }

  async list() {
    const stores = await this.repository.find();
    console.log(stores);
    return stores;
  }

  async findByCnpj(loja_cnpj) {
    const store = await this.repository.findOne({
      loja_cnpj
    });
    return store;
  }

}

exports.StoresRepository = StoresRepository;