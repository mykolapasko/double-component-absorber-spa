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
BoronDetailsComponent.$inject = ['DataService', '$state'];
function BoronDetailsComponent (DataService, $state) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch;
    this.currentClad = $state.params.itemClad;
    this.item.data = {};
    this.values = [58.4, 58.5, 58.6, 58.7, 58.8, 58.9, parseFloat(59).toPrecision(3)]
  }

  this.newValue = function(value, item) {
    this.item.data.actBoronHgt = parseFloat(this.item.cladDepth - this.item.actTitanateHgt - parseFloat(value * 10));
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