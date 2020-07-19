(function () {
'use strict';

angular.module('common')
.service('CalculationService', CalculationService);

CalculationService.$inject = ['$rootScope'];

function CalculationService($rootScope) {

  this.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
  }

  


}

})();