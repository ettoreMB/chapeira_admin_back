"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStoreController = void 0;

var _tsyringe = require("tsyringe");

var _CreateStoreUseCase = require("./CreateStoreUseCase");

class CreateStoreController {
  async handle(req, res) {
    const {
      loja_sigla,
      loja_nome,
      loja_endereco,
      loja_cidade,
      loja_uf,
      loja_cnpj,
      loja_razaosocial = "IGUASPORT LTDA",
      responsavel,
      responsavel_email,
      responsavel_telefone,
      ativo
    } = req.body;

    const createStoreUseCase = _tsyringe.container.resolve(_CreateStoreUseCase.CreateStoreUseCase);

    await createStoreUseCase.execute({
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
    return res.status(201).send();
  }

}

exports.CreateStoreController = CreateStoreController;