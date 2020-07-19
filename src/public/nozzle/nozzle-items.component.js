(function() {

'use strict';

angular.module('public')
.component('nozzleItems', {
  templateUrl: 'public/nozzle/nozzle-items.html',
  controller: NozzleItemsController,
  bindings: {
  	items : '<'
  }
});

//Component controller start
NozzleItemsController.$inject = ['DataService', '$state'];
function NozzleItemsController (DataService, $state) {

  this.$onInit = function() {
  }

  this.goToItemDetails = function(item) {
    $state.go('public.nozzle.details', {'itemId': item._id});
  }


}


})();