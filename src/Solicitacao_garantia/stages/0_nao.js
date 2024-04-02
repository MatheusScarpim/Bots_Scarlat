const storagesADO = require('../storage');

const initialStage = {
  exec({
    from,
    message,
    client
  }) {
    if(storagesADO.clientNaBase == true)
    {
      client.sendListMessage(from, {
        buttonText: 'Escolha uma opção',
        description: 'Olá #Cliente. Seja Bem vindo ao #Clube.\nComo posso te ajudar?"',
        sections: [{
          title: 'Opções',
          rows: [{
              rowId: '1',
              title: 'Secretária',
            },
            {
              rowId: '2',
              title: 'Financeiro',
            },
            {
              rowId: '3',
              title: 'Esportes',
            },
            {
              rowId: '4',
              title: 'Social',
            },
            {
              rowId: '5',
              title: 'Restaurantes',
            },
            {
              rowId: '6',
              title: 'Reservas',
            }
          ],
        }, ],
      });
    }
    else
    {
      client.sendListMessage(from, {
        buttonText: 'Escolha uma opção',
        description: 'Olá. Seja Bem vindo ao #Clube.\nComo posso te ajudar?"',
        sections: [{
          title: 'Opções',
          rows: [{
              rowId: '1',
              title: 'Quero ser sócio',
            },
            {
              rowId: '2',
              title: 'Departamento de Compras',
            },
            {
              rowId: '3',
              title: 'Departamento Financeiro',
            },
            {
              rowId: '4',
              title: 'Secretaria',
            },
            {
              rowId: '5',
              title: 'Social',
            }
          ],
        }, ],
      });
    }


    storagesADO.storage[from].stage = 1;
    return null;
  },
};


exports.initialStage = initialStage;