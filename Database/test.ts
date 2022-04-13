const fs = require('fs/promises');
const path = require('path');

; (async () => {
  const data = JSON.parse(await fs.readFile(path.resolve('Visitantes.json'), { encoding: 'utf8' }))
  // (err: any, data: any): Buffer => {
  //   if (err) return err;
  //   return data;
  // }));
  console.log(data)





  // const filtered = datas.find((visitor) => {
  //   return visitor.Loja_Sigla === 'RS-BELAS'
  // })
  // console.log(filtered);
})()


