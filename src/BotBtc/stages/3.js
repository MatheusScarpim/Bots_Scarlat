const storagesADO = require('../storage.js');

const terceiraMensagem = {
  exec({
    from,
    message,
    client
  }) {
    storagesADO.storage[from].stage = 0;
   return  "Aguarde um momento, pois estou te transferindo para um dos nossos consultores";
  }
};

exports.terceiraMensagem = terceiraMensagem;