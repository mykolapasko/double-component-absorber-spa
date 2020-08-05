(function () {
"use strict";

angular.module('public')
.controller('DeckController', DeckController);

DeckController.$inject = ['$stateParams','agents', 'DataService', 'CalculationService'];
function DeckController($stateParams, agents, DataService, CalculationService) {
  var deckCtrl = this;
  deckCtrl.agents = agents.filter(function(agent) {
  	return agent.deck === $stateParams.deck;
  });

  deckCtrl.color = $stateParams.deck;


// This method is for the production

  // deckCtrl.getWeightAndPutInfoAfter = function(agent, index) {
  //   var promise = DataService.getAgentWeight();
  //   promise.then(function(response) {
  //     var weight = parseFloat(response.slice(2,8));
  //     agent.weight = weight;
  //     agent.isEmpty = false;
  //     agent.data = {};
  //     agent.data.weight = weight;
  //     agent.data.isEmpty = agent.isEmpty;
  //     DataService.putInfoAgents(agent);
  //   });
  // }


// This method is for the development process

  deckCtrl.getFakeWeightAndPutInfoAfter = function(agent, index) {
    var fakeAgentWgt = parseFloat(CalculationService.getRandomArbitrary(159.5, 164.3).toPrecision(4));
    agent.data = {};
    agent.weight = fakeAgentWgt;
    agent.isEmpty = false;
    agent.data.weight = fakeAgentWgt;
    agent.data.isEmpty = agent.isEmpty;
    DataService.putInfoAgents(agent);
}



}


})();