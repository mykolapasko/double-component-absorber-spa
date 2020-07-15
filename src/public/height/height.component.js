(function() {

'use strict';

angular.module('public')
.component('height', {
  templateUrl: 'public/height/height.html',
  controller: HeightController
});

//Component controller start
HeightController.$inject = ['DataService', '$state'];
function HeightController (DataService, $state) {

  this.$onInit = function() {
    this.banch = '';
  }

  this.goToHeightItems = function() {
    $state.go('public.height.items', {'banch': this.banch});
  }

}

})();