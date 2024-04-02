const storagesADO = require('../storage.js');

const quartaMensagem = {
  exec({
    from,
    message,
    client
  }) {
    let msg = null;
    if(message == "Sim")
    {
        msg = "Aguarde um momento, pois estou te transferindo para um dos nossos consultores";
        storagesADO.storage[from].stage = 0;
    }
    else if(message == "Não")
    {
      msg = "O #Clube agradece seu contato. Em casos de dúvida, entrar em contato através do número #TELEFONE.\nObrigado!"
      storagesADO.storage[from].stage = 0;
    }
    else
    {
      msg = "Desculpe, mas a opção digitada não é valida. Por gentileza, selecione uma das opções acima."
    }
    return msg; 
  }
};

exports.quartaMensagem = quartaMensagem;