(function() {

'use strict';

angular.module('public')
.component('home', {
  templateUrl: 'public/home/home.html',
  controller: HomeComponentController
});

//Component controller start
HomeComponentController.$inject = ['ExpTitanateDensity', 'ExpBoronDensity', 'ExpTitanateHgt', 'ExpBoronHgt', 'RodLength'];
function HomeComponentController (ExpTitanateDensity, ExpBoronDensity, ExpTitanateHgt, ExpBoronHgt, RodLength) {

  this.$onInit = function() {
  	this.expTitanateDensity = ExpTitanateDensity;
  	this.expBoronDensity = ExpBoronDensity;
  	this.expTitanateHgt = ExpTitanateHgt;
  	this.expBoronHgt = ExpBoronHgt;
  	this.rodLength = RodLength;
  }

}

})();