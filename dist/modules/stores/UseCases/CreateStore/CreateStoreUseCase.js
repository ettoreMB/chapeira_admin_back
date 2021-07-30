"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStoreUseCase = void 0;

var _tsyringe = require("tsyringe");

var _AppErrors = require("../../../../errors/AppErrors");

var _IStoreRepository = require("../../repositories/IStoreRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateStoreUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("StoresRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IStoreRepository.IStoresRepository === "undefined" ? Object : _IStoreRepository.IStoresRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateStoreUseCase {
  constructor(storesRepository) {
    this.storesRepository = storesRepository;
  }

  async execute({
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
    const store = await this.storesRepository.findByCnpj(loja_cnpj);

    if (store) {
      throw new _AppErrors.AppErrors('Loja Ja existe no sistema');
    }

    await this.storesRepository.create({
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
  }

}) || _class) || _class) || _class) || _class);
exports.CreateStoreUseCase = CreateStoreUseCase;