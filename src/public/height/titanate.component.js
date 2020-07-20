(function() {

'use strict';

angular.module('public')
.component('titanate', {
  templateUrl: 'public/height/titanate-details.html',
  controller: TitanateDetailsComponent,
  bindings: {
  	item: '<'
  },
});

//Component controller start
TitanateDetailsComponent.$inject = ['DataService', '$state', 'RodLength'];
function TitanateDetailsComponent (DataService, $state, RodLength) {

  this.$onInit = function() {
    if (this.item.actTitanateHgt) {
      $state.go('public.height.boron', {"banch": $state.params.banch, "itemId": $state.params.itemId, "itemClad": $state.params.itemClad});
    } 
    this.currentBanch = $state.params.banch;
    this.currentClad = $state.params.itemClad;
    this.item.data = {};
    if (this.item.cladDepth === 4095) {
      this.values = [41.7, 41.8, 41.9, parseFloat(42).toPrecision(3), 42.1, 42.2, 42.3];
    } else if ( this.item.cladDepth === 4096) {
      this.values = [41.6, 41.7, 41.8, 41.9, parseFloat(42).toPrecision(3), 42.1, 42.2];
    } else {
      this.values = [41.5, 41.6, 41.7, 41.8, 41.9, parseFloat(42).toPrecision(3), 42.1];
    }
  }

  this.newValue = function(value, item) {
    this.item.data.actTitanateHgt = parseFloat(this.item.cladDepth + parseFloat(value * 10) - RodLength);
  }

  this.putTitanateData = function() {
    var promise = DataService.putInfo(this.item);
    promise.then(function(response) {
      if (response.data.actTitanateHgt) {
        $state.go('public.height.boron', {"banch": $state.params.banch, "itemId": $state.params.itemId, "itemClad": $state.params.itemClad});
      }
    })
  }
}


})();