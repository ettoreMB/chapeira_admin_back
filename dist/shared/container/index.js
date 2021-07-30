"use strict";

var _tsyringe = require("tsyringe");

var _InvoiceRepository = require("../../modules/invoice/repositories/implementation/InvoiceRepository");

var _StoresRepository = require("../../modules/stores/repositories/implementations/StoresRepository");

var _UniverseRepository = require("../../modules/stores/repositories/implementations/UniverseRepository");

//ICreateStore
_tsyringe.container.registerSingleton("StoresRepository", _StoresRepository.StoresRepository); //ICreateUniverse


_tsyringe.container.registerSingleton("UniversesRepostiory", _UniverseRepository.UniversesRepository);

_tsyringe.container.registerSingleton("InvoicesRepostiory", _InvoiceRepository.InvoiceRepository); //ICreateUser
//ICreateNotaFiscal