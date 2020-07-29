(function() {

'use strict';

angular.module('public')
.component('weightDetails', {
  templateUrl: 'public/weight/weight-details.html',
  controller: WeightDetailsComponentController,
  bindings: {
    item: '<'
  }
});

//Component controller start
WeightDetailsComponentController.$inject = ['$state', 'DataService', 'CalculationService'];
function WeightDetailsComponentController ($state, DataService, CalculationService) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch;
    this.currentClad = $state.params.itemClad;
    this.item.data = {};
  }


  this.newValue = function(value) {
    this.item.data.cladDepth = parseInt(value);
  }

  this.getCladWeight = function(item) {
    DataService.getCladWeight()
    .then(function(response) {
      item.data.cladWgt = parseFloat(response);
    });
  }

  this.putCladData = function(item) {
    DataService.putInfo(item)
    .then(function(response) {
      if (response.data.cladDepth && response.data.cladWgt) {
        $state.go('public.weight.items', {"banch": $state.params.banch});
      }
    });
  }

  this.getFakeCladWeight = function(item) {
    var weight = parseFloat(CalculationService.getRandomArbitrary(436, 495).toPrecision(4));
    item.data.fakeCladWgt = weight;
  }
}


})();