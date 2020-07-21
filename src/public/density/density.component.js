(function() {

'use strict';

angular.module('public')
.component('density', {
  templateUrl: 'public/density/density.html',
  controller: DensityController
});

//Component controller start
DensityController.$inject = ['DataService', '$state'];
function DensityController (DataService, $state) {

  this.$onInit = function() {
    this.banch = '';
  }

  this.goToDensityItems = function() {
    $state.go('public.density.items', {'banch': this.banch});
  }

}

})();