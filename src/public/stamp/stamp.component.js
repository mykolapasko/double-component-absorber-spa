(function() {

'use strict';

angular.module('public')
.component('stamp', {
  templateUrl: 'public/stamp/stamp.html',
  controller: StampComponentController
});

//Component controller start
StampComponentController.$inject = ['DataService', '$state'];
function StampComponentController (DataService, $state) {

  this.$onInit = function() {
    this.banch = '';
  }

  this.goToStampItems = function() {
    $state.go('public.stamp.items', {'banch': this.banch});
  }

}

})();