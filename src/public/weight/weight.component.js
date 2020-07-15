(function() {

'use strict';

angular.module('public')
.component('weight', {
  templateUrl: 'public/weight/weight.html',
  controller: WeightComponentController
});

//Component controller start
WeightComponentController.$inject = ['DataService', '$state'];
function WeightComponentController (DataService, $state) {

  this.$onInit = function() {
    this.banch = '';
  }

  this.goToWeightItems = function() {
    $state.go('public.weight.items', {'banch': this.banch});
  }

}

})();