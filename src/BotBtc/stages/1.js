const storagesADO = require('../storage.js');
// const geraProtocolo = require('../gerarProtocolos/geraDadosProtocolo.js')

const menu = {
  1: {
    description: 'Crédito',
  },
};

const primeiraMensagem = {
  exec({
    from,
    message,
    client
  }) {
    console.log(message)
    let msg = null;
    storagesADO.storage[from].escolha = message;
    if (storagesADO.storage[from].clientNaBase == true) {
      if (message == "Esportes") {
        client.sendListMessage(from, {
          buttonText: 'Escolha uma opção',
          description: 'Você possui amplo espaço de esportes para sua diversão. Qual esporte você gostaria de mais detalhes?',
          sections: [{
            title: 'Opções',
            rows: [{
                rowId: '1',
                title: 'Futebol',
              },
              {
                rowId: '2',
                title: 'Tenis',
              },
              {
                rowId: '3',
                title: 'Beach Tenis',
              },
              {
                rowId: '4',
                title: 'Volei',
              },
              {
                rowId: '5',
                title: 'Futvolei',
              },
              {
                rowId: '6',
                title: 'Natação',
              },
              {
                rowId: '7',
                title: 'Academia',
              },
              {
                rowId: '8',
                title: 'Escolinha de Futebol',
              }
            ],
          }, ],
        });
        storagesADO.storage[from].stage = 2;
      } else if (message == "Social") {
        msg = "Ainda não temos eventos agendados para os próximos dias."
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
        storagesADO.storage[from].stage = 4;
      } else if (message == "Restaurantes") {
        msg = "O horário de funcionamento do nosso restaurente é de segunda a sexta, das #HH até #HH, aos sábados, domingos e feriados das #HH ás #HH."
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
        storagesADO.storage[from].stage = 4;
      } else if (message == "Secretária" || message == "Departamento Financeiro" || message == "Reservas" || message == "Financeiro") {
        msg = "Aguarde um momento, pois estou te transferindo para um dos nossos consultores";
        storagesADO.storage[from].stage = 0;
      } else {
        msg = "Desculpe, mas a opção digitada não é valida. Por gentileza, selecione uma das opções acima."
      }
    } else {
      if (message == "Quero virar sócio") {
        client.sendListMessage(from, {
          buttonText: 'Escolha uma opção',
          description: 'Que tipo de plano você gostaria de estar se associando?',
          sections: [{
            title: 'Opções',
            rows: [{
                rowId: '1',
                title: 'Individual',
              },
              {
                rowId: '2',
                title: 'Familiar',
              },
            ],
          }, ],
        });
        storagesADO.storage[from].stage = 3;
      } else if (message == "Social") {
        msg = "Ainda não temos eventos agendados para os próximos dias."
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
      } else if (message == "Departamento de Compras" || message == "Departamento Financeiro" || message == "Secretária" || message == "Financeiro") {
        msg = "Aguarde um momento, pois estou te transferindo para um dos nossos consultores";
        storagesADO.storage[from].stage = 0;
      } else {
        msg = "Desculpe, mas a opção digitada não é valida. Por gentileza, selecione uma das opções acima."
      }
    }
    return msg;
  }
};

exports.primeiraMensagem = primeiraMensagem;