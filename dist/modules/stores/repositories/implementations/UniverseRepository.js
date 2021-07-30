"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniversesRepository = void 0;

var _typeorm = require("typeorm");

var _Universe = require("../../entities/Universe");

class UniversesRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Universe.Universe);
  }

  async create({
    loja_sigla,
    zona,
    andar,
    universo_nome
  }) {
    const universe = this.repository.create({
      loja_sigla,
      zona,
      andar,
      universo_nome
    });
    await this.repository.save(universe);
  }

  async findByName(universo_nome) {
    const universe = this.repository.findOne({
      universo_nome
    });
    return universe;
  }

}

exports.UniversesRepository = UniversesRepository;