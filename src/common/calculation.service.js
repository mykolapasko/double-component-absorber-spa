(function () {
'use strict';

angular.module('common')
.service('CalculationService', CalculationService);

CalculationService.$inject = ['$rootScope'];

function CalculationService($rootScope) {

  this.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
  }

  this.getDensity = function(absorberHgt, absorberWgt, diameterAvg) {
  	console.log(absorberHgt, absorberWgt, diameterAvg);
  	var density = Math.round((absorberWgt/(7.85*diameterAvg*diameterAvg*absorberHgt)*10000).toPrecision(4)*100)/100;
  	return density;
  }


}

})();