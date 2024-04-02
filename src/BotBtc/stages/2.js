const storagesADO = require('../storage.js');

const segundaMensagem = {
  exec({
    from,
    message,
    client
  }) {
    let msg;
    let opcaoUser = storagesADO.storage[from].escolha;
    if (storagesADO.storage[from].clientNaBase == true) {
      if (opcaoUser == "Esportes") {
        msg = "O horário de funcionamento do (a) #Esporte é de segunda a sexta, das #HH até #HH, aos sábados, domingos e feriados das #HH ás #HH"
        setTimeout(() => {
          client.sendListMessage(from, {
            buttonText: 'Escolha uma opção',
            description: 'Posso te ajudar com algo mais?',
            sections: [{
              title: 'Opções',
              rows: [{
                  rowId: '1',
                  title: 'Sim',
                },
                {
                  rowId: '2',
                  title: 'Não',
                },
              ],
            }, ],
          });
        }, 1000);
        storagesADO.storage[from].stage = 4;
      } else {
        msg = "Desculpe, mas a opção digitada não é valida. Por gentileza, selecione uma das opções acima."
      }
    }
    return msg
  },
};

exports.segundaMensagem = segundaMensagem;