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
TitanateDensityComponentController.$inject = ['DataService', '$state', 'ExpTitanateHgt', 'ExpTitanateDensity'];
function TitanateDensityComponentController (DataService, $state, ExpTitanateHgt, ExpTitanateDensity) {

  this.$onInit = function() {
    this.item.data = {};
    this.currentBanch = $state.params.banch;
    this.expTitanateHgt = ExpTitanateHgt;
    this.expTitanateDensity = ExpTitanateDensity;
  }

  this.putNozzleData = function() {
    this.item.data.nozzle = this.nozzle;
    var promise = DataService.putInfo(this.item);
    promise.then(function(response) {
      if (response.data.nozzle) {
        $state.go('public.nozzle.items', {"banch": $state.params.banch});
      }
    })
  }
}


})();