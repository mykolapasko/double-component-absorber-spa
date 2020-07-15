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
TitanateDetailsComponent.$inject = ['DataService', '$state', 'CladDepth', 'RodLength'];
function TitanateDetailsComponent (DataService, $state, CladDepth, RodLength) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch;
    this.currentClad = $state.params.itemClad;
    this.item.data = {};
  }

  this.newValue = function(value, item) {
    this.item.data.actTitanateHgt = parseFloat(CladDepth + parseFloat(value * 10) - RodLength);
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