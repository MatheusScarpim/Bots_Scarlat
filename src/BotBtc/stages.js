const storage = require('../BotBtc/storage')
const stageIndex = require('../BotBtc/stages/index')


const stages = [{
    stage: stageIndex.intents.initialStage,
  },
  {
    stage: stageIndex.intents.primeiraMensagem,
  },
  {
    stage: stageIndex.intents.segundaMensagem,
  },
  {
    stage: stageIndex.intents.terceiraMensagem,
  },
  {
    stage: stageIndex.intents.quartaMensagem,
  },
  {
    stage: stageIndex.intents.quintaMensagem,
  },
];

function getStage({
  from
}) {
  if (storage.storage[from]) {
    return storage.storage[from].stage;
  }
  storage.storage[from] = {
    stage: 0,
    op: 0,
    clientNaBase: true,
    escolha: ""
  };

  return storage.storage[from].stage;
}

exports.stages = stages;
module.exports.getStage = getStage;