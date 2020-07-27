(function() {

'use strict';

angular.module('public')
.component('stampDetails', {
  templateUrl: 'public/stamp/stamp-item-details.html',
  controller: StampItemDetailsComponentController,
  bindings: {
  	item: '<'
  },
});

//Component controller start
StampItemDetailsComponentController.$inject = ['DataService', '$state'];
function StampItemDetailsComponentController (DataService, $state) {

  this.$onInit = function() {
    this.stamp = '';
    this.item.data = {};
  }

  this.putStampData = function() {
    this.item.data.stamp = this.stamp;
    var promise = DataService.putInfo(this.item);
    promise.then(function(response) {
      if (response.data.stamp) {
        $state.go('public.stamp.items', {"banch": $state.params.banch});
      }
    })
  }
}


})();