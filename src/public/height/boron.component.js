(function() {

'use strict';

angular.module('public')
.component('boron', {
  templateUrl: 'public/height/boron-details.html',
  controller: BoronDetailsComponent,
  bindings: {
  	item: '<'
  },
});

//Component controller start
BoronDetailsComponent.$inject = ['DataService', '$state', 'CladDepth', 'ButtSpace'];
function BoronDetailsComponent (DataService, $state, CladDepth, ButtSpace) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch;
    this.currentClad = $state.params.itemClad;
    this.item.data = {};
  }

  this.newValue = function(value, item) {
    this.item.data.actBoronHgt = parseFloat(CladDepth - this.item.actTitanateHgt - parseFloat(value * 10));
  }

  this.putBoronData = function() {
    var promise = DataService.putInfo(this.item);
    promise.then(function(response) {
      if (response.data.actBoronHgt) {
        $state.go('public.height.items', {"banch": $state.params.banch});
      }
    })
  }
}


})();