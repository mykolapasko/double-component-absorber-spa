(function() {

'use strict';

angular.module('public')
.component('densityItems', {
  templateUrl: 'public/density/density-items.html',
  controller: DensityItemsComponentController,
  bindings: {
    items: '<'
  }
});

//Component controller start
DensityItemsComponentController.$inject = ['DataService', '$state'];
function DensityItemsComponentController (DataService, $state) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch
  }

  this.goToDensityDetails = function(item) {
    $state.go('public.density.titanate', {'itemId': item._id});
  }
}


})();