(function() {

'use strict';

angular.module('public')
.component('stampItems', {
  templateUrl: 'public/stamp/stamp-items.html',
  controller: StampItemsComponentController,
  bindings: {
  	items : '<'
  }
});

//Component controller start
StampItemsComponentController.$inject = ['DataService', '$state'];
function StampItemsComponentController (DataService, $state) {

  this.$onInit = function() {

  }

  this.goToItemDetails = function(item) {
    $state.go('public.stamp.details', {'itemId': item._id});
  }


}


})();