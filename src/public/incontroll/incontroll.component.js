(function() {

'use strict';

angular.module('public')
.component('foundItems', {
  templateUrl: 'public/incontroll/incontroll.founditems.html',
  controller: FoundItemsComponentController,
  bindings: {
    items: '<'
  }
});

//Component controller start
FoundItemsComponentController.$inject = ['$scope', 'DataService', '$rootScope', 'ExpTitanateDensity', 'ExpBoronDensity', 'ExpTitanateHgt', 'ExpBoronHgt', 'TitanateAdditive', 'BoronAdditive'];
function FoundItemsComponentController ($scope, DataService, $rootScope, ExpTitanateDensity, ExpBoronDensity, ExpTitanateHgt, ExpBoronHgt, TitanateAdditive, BoronAdditive) {
  var $ctrl = this;

  $scope.$on('item_created', function(event, obj) {
    $ctrl.items.push(obj);
  });

  $ctrl.putInfo = function(item, index) {
    item.data = {};
    item.data.diameterThree = parseFloat(item.diameterThree);
    item.data.diameterFour = parseFloat(item.diameterFour);
    item.data.diameterAvg = Math.round(((parseFloat(item.diameterOne) + parseFloat(item.diameterTwo) + parseFloat(item.data.diameterThree) + parseFloat(item.data.diameterFour))/4).toPrecision(4)*100)/100;
    item.data.nozzleAvg = Math.round(((parseFloat(item.data.diameterThree) + parseFloat(item.data.diameterFour))/2).toPrecision(4)*100)/100;
    item.data.expBoronWgt = parseFloat((parseFloat(((ExpBoronHgt * ExpBoronDensity * 3.14 * (item.data.diameterAvg * item.data.diameterAvg)/4)/1000).toPrecision(4)) + parseFloat(BoronAdditive)).toPrecision(4));
    item.data.expTitanateWgt = parseFloat((parseFloat(((ExpTitanateHgt * ExpTitanateDensity * 3.14 * (item.data.diameterAvg * item.data.diameterAvg)/4)/1000).toPrecision(3)) + parseFloat(TitanateAdditive)).toPrecision(3));
    var promise = DataService.putInfo(item)
    .then($ctrl.remove(index));
  }

  $ctrl.remove = function (index) {
    $ctrl.items.splice(index, 1);
  }
}


})();