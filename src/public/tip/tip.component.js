(function() {

'use strict';

angular.module('public')
.component('tip', {
  templateUrl: 'public/tip/tip.html',
  controller: TipsComponentController,
  bindings: {
  	tips : '<'
  }
});

//Component controller start
TipsComponentController.$inject = ['DataService', '$state', 'CalculationService', '$rootScope', '$scope'];
function TipsComponentController (DataService, $state, CalculationService, $rootScope, $scope) {

  this.$onInit = function() {
    if (this.tips.length === 0) {
      this.currentTipId = 1;
    } else {
      this.currentTipId = this.tips[0].id + 1;
    }
    this.data = {};
  }

   this.getFakeTipWgt = function() {
    var weight = parseFloat(CalculationService.getRandomArbitrary(18, 18.5).toPrecision(3));
    this.data.tipWgt = weight;
  }

  this.postTipData = function() {
    this.data.id = this.currentTipId;
    this.data.diameterAvg = Math.round(((parseFloat(this.data.diameterOne) + parseFloat(this.data.diameterTwo))/2).toPrecision(4)*100)/100;
    DataService.postTipData(this.data);
  }


}


})();