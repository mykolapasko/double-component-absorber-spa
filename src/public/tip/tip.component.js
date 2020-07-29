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
TipsComponentController.$inject = ['DataService', '$state', 'CalculationService'];
function TipsComponentController (DataService, $state, CalculationService) {

  var $ctrl = this;

  $ctrl.$onInit = function() {
    if ($ctrl.tips.length === 0) {
      $ctrl.currentTipId = 1;
    } else {
      $ctrl.currentTipId = $ctrl.tips[0].id + 1;
    }
    $ctrl.data = {};
    angular.element("#focusField").focus();
  }

   $ctrl.getFakeTipWgt = function() {
    var weight = parseFloat(CalculationService.getRandomArbitrary(18, 18.5).toPrecision(3));
    $ctrl.data.fakeTipWgt = weight;
  }

  $ctrl.postTipData = function() {
    $ctrl.data.id = $ctrl.currentTipId;
    $ctrl.data.diameterAvg = Math.round(((parseFloat($ctrl.data.diameterOne) + parseFloat($ctrl.data.diameterTwo))/2).toPrecision(4)*100)/100;
    DataService.postTipData($ctrl.data)
    .then(function(){
      $state.go('public.tip', null, {reload: 'public.tip'});
    });
  }

  $ctrl.getActualTipWeight = function() {
    var promise = DataService.getActualTipWeight();
    promise.then(function(response) {
      $ctrl.data.tipWgt = response;
    });
  }
}


})();