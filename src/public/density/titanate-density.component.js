(function() {

'use strict';

angular.module('public')
.component('titanateDensity', {
  templateUrl: 'public/density/titanate-density.html',
  controller: TitanateDensityComponentController,
  bindings: {
  	item: '<'
  },
});

//Component controller start
TitanateDensityComponentController.$inject = ['DataService', '$state', 'ExpTitanateHgt', 'ExpTitanateDensity', 'CalculationService'];
function TitanateDensityComponentController (DataService, $state, ExpTitanateHgt, ExpTitanateDensity, CalculationService) {

  this.$onInit = function() {
    if (this.item.actTitanateWgt && this.item.actTitanateDensity) {
      $state.go('public.density.boron', {"itemId": this.item._id});
    }
    this.item.data = {};
    this.currentBanch = $state.params.banch;
    this.expTitanateHgt = ExpTitanateHgt;
    this.expTitanateDensity = ExpTitanateDensity;
  }

  this.getActTitanateHgt = function(item) {
    var promise = DataService.getItem(item._id);
    promise.then(function(response) {
    item.data.actTitanateHgt = response.actTitanateHgt;

    });
  }

  this.getFakeTitanateWgt = function(item) {
    var weight = parseFloat(CalculationService.getRandomArbitrary(item.expTitanateWgt - 0.5, item.expTitanateWgt + 0.8).toPrecision(3));
    item.data.actTitanateWgt = weight;
    var density = CalculationService.getDensity(item.data.actTitanateHgt, item.data.actTitanateWgt, item.diameterAvg);
    item.data.actTitanateDensity = density;
    console.log(item.data);
  }

  this.putDataAndGoToBoron = function(item) {
    var promise = DataService.putInfo(item);
    promise.then(function(response) {
      if (response.data.actTitanateWgt && response.data.actTitanateDensity) {
        $state.go('public.density.boron', {"itemId": item._id});
      }
    })
  }
}


})();