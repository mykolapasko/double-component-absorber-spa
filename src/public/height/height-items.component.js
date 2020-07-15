(function() {

'use strict';

angular.module('public')
.component('heightItems', {
  templateUrl: 'public/height/height-items.html',
  controller: HeightItemsComponentController,
  bindings: {
    items: '<'
  }
});

//Component controller start
HeightItemsComponentController.$inject = ['DataService', '$state'];
function HeightItemsComponentController (DataService, $state) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch
  }

  this.goToTitanateDetails = function(item) {
    $state.go('public.height.titanate', {'itemId': item._id, 'itemClad': item.clad});
  }
}


})();