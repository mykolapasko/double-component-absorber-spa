(function() {

'use strict';

angular.module('public')
.component('nozzle', {
  templateUrl: 'public/nozzle/nozzle.html',
  controller: NozzleController
});

//Component controller start
NozzleController.$inject = ['DataService', '$state'];
function NozzleController (DataService, $state) {

  this.$onInit = function() {
    this.banch = '';
  }

  this.goToNozzleItems = function() {
    $state.go('public.nozzle.items', {'banch': this.banch});
  }

}

})();