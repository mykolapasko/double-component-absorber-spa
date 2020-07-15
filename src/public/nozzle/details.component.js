(function() {

'use strict';

angular.module('public')
.component('nozzleDetails', {
  templateUrl: 'public/nozzle/details.html',
  controller: NozzleDetailsComponent,
  bindings: {
  	item: '<'
  },
});

//Component controller start
NozzleDetailsComponent.$inject = ['DataService', '$state'];
function NozzleDetailsComponent (DataService, $state) {

  this.$onInit = function() {
    console.log("item: ", this.item);
    console.log("$state: ", $state.params);
    this.nozzle = '';
    this.item.data = {};
  }

  this.putNozzleData = function() {
    this.item.data.nozzle = this.nozzle;
    var promise = DataService.putInfo(this.item);
    promise.then(function(response) {
      if (response.data.nozzle) {
        $state.go('public.nozzle.items', {"banch": $state.params.banch});
      }
    })
  }
}


})();