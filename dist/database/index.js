"use strict";

var _typeorm = require("typeorm");

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
const connection = (0, _typeorm.createConnection)(); // import { createConnection, getConnectionOptions } from 'typeorm';
// interface IOptions {
//   host: string;
// }
// getConnectionOptions().then(options => {
//   const newOptions = options as IOptions;
//   newOptions.host = 'chapeira.com.br'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });