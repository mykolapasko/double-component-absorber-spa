(function() {

'use strict';

angular.module('public')
.component('boronDensity', {
  templateUrl: 'public/density/boron-density.html',
  controller: BoronDensityComponentController,
  bindings: {
  	item: '<'
  },
});

//Component controller start
BoronDensityComponentController.$inject = ['DataService', '$state', 'ExpBoronHgt', 'ExpBoronDensity', 'CalculationService'];
function BoronDensityComponentController (DataService, $state, ExpBoronHgt, ExpBoronDensity, CalculationService) {

  this.$onInit = function() {
    this.item.data = {};
    this.currentBanch = $state.params.banch;
    this.expBoronHgt = ExpBoronHgt;
    this.expBoronDensity = ExpBoronDensity;
  }

  this.getActBoronHgt = function(item) {
    var promise = DataService.getItem(item._id);
    promise.then(function(response) {
      item.data.actBoronHgt = response.actBoronHgt;
    });
  }

  this.getFakeBoronWgt = function(item) {
    var weight = parseFloat(CalculationService.getRandomArbitrary(item.expBoronWgt - 0.4, item.expBoronWgt + 1.1).toPrecision(4));
    item.data.actBoronWgt = weight;
    var density = CalculationService.getDensity(item.data.actBoronHgt, item.data.actBoronWgt, item.diameterAvg);
    item.data.actBoronDensity = density;
    item.data.status = ["ongoing"];
  }

  this.putDataAndGoToItems = function(item) {
    var promise = DataService.putInfo(item);
    promise.then(function(response) {
      if (response.data.actBoronWgt && response.data.actBoronDensity) {
        $state.go('public.density.items', {banch: $state.params.banch});
      }
    })
  }
}


})();