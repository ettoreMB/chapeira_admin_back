"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUniverController = void 0;

var _tsyringe = require("tsyringe");

var _CreateUniverseUseCase = require("./CreateUniverseUseCase");

class CreateUniverController {
  async handle(req, res) {
    const {
      loja_sigla,
      zona,
      andar,
      universo_nome
    } = req.body;

    const createUniverseUsecase = _tsyringe.container.resolve(_CreateUniverseUseCase.CreateUniverseUseCase);

    await createUniverseUsecase.execute({
      loja_sigla,
      zona,
      andar,
      universo_nome
    });
    return res.status(201).send();
  }

}

exports.CreateUniverController = CreateUniverController;