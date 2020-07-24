(function() {
"use strict";

angular.module('common', [])
.constant('ExpTitanateDensity', 5.15)
.constant('ExpBoronDensity', 1.81)
.constant('ExpTitanateHgt', 315)
.constant('ExpBoronHgt', 3193)
.constant('RodLength', 4200)
.constant('BoronAdditive', 0.2)
.constant('TitanateAdditive', 0.8)
.constant('ApiPath', 'http://localhost:3000')
// .constant('ApiPath', 'http://192.168.0.1:3000')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
