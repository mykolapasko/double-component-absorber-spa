(function() {

'use strict';

angular.module('public')
.component('weightItems', {
  templateUrl: 'public/weight/weight-items.html',
  controller: WeightItemsComponentController,
  bindings: {
  	items : '<'
  }
});

//Component controller start
WeightItemsComponentController.$inject = ['DataService', '$state'];
function WeightItemsComponentController (DataService, $state) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch;
  }

  this.goToWeightDetails = function(item) {
    $state.go('public.weight.details', {'itemId': item._id, 'itemClad': item.clad});
  }

}

})();