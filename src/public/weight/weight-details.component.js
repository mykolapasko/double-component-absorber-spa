(function() {

'use strict';

angular.module('public')
.component('weightDetails', {
  templateUrl: 'public/weight/weight-details.html',
  controller: WeightDetailsComponentController,
  bindings: {
    item: '<'
  }
});

//Component controller start
WeightDetailsComponentController.$inject = ['$state', 'DataService', 'CalculationService'];
function WeightDetailsComponentController ($state, DataService, CalculationService) {

  this.$onInit = function() {
    this.currentBanch = $state.params.banch;
    this.currentClad = $state.params.itemClad;
    this.item.data = {};
  }


  this.newValue = function(value) {
    this.item.data.cladDepth = parseInt(value);
  }

  this.getCladWeight = function(item) {
    DataService.getCladWeight()
    .then(function(response) {
      item.data.cladWgt = parseFloat(response);
    });
  }

  this.putCladData = function(item) {
    DataService.putInfo(item)
    .then(function(response) {
      if (response.data.cladDepth && response.data.cladWgt) {
        $state.go('public.weight.items', {"banch": $state.params.banch});
      }
    });
  }

  this.getFakeCladWeight = function(item) {
    var weight = parseFloat(CalculationService.getRandomArbitrary(495, 505).toPrecision(4));
    item.data.cladWgt = weight;
  }




  // $ctrl.getElementWeight = function(item, index) {
  //   var promise = DataService.getElementWeight();
  //   promise.then(function(response) {
  //     weight = parseFloat(response.slice(2,8));
  //     console.log(weight);
  //     return weight;
  //   }).then(function(weight) {
  //     if (parseFloat(weight) < 600) {
  //       item.data = {};
  //       item.data.pipe_weight = weight;
  //       item.weight_1 = weight;
  //       item.productionStarted = Date.now();
  //     } else {
  //       item.productionFinished = Date.now();
  //       item.weight_2 = weight;
  //       item.weight_3 = parseFloat((item.weight_2 - item.weight_1 - 0.70).toPrecision(4));
  //       item.weight_delta = parseFloat((item.weight_3 - item.abs_weight_calc).toPrecision(4));
  //       item.data.absorber_weight = parseFloat((item.abs_weight_calc + item.weight_delta).toPrecision(4));
  //       item.data.status = ["ongoing"];
  //       item.data.productionInterval = (item.productionFinished - item.productionStarted)/1000;
  //       console.log(item.data);
  //     }
  //   });
  // }

  // $ctrl.getRandomArbitrary = function(min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  // $ctrl.getElementWeight = function(item) {
  //   if (!item.weight_1) {
  //     item.data = {};
  //     item.weight_1 = parseFloat($ctrl.getRandomArbitrary(445, 507).toPrecision(4));
  //     item.data.pipe_weight = item.weight_1;
  //     console.log(item.data);
  //     item.productionStarted = Date.now();
  //   } else {
  //     item.productionFinished = Date.now();
  //     item.weight_2 = parseFloat(($ctrl.getRandomArbitrary(item.abs_weight_calc, item.abs_weight_calc + 3) + item.weight_1).toPrecision(4));
  //     item.weight_diff = parseFloat((item.weight_2 - item.weight_1 - item.abs_weight_calc).toPrecision(2));
  //     item.data.absorber_weight = parseFloat((item.abs_weight_calc + item.weight_diff).toPrecision(4));
  //     item.data.status = ["ongoing"];
  //     item.data.productionInterval = (item.productionFinished - item.productionStarted)/1000;
  //   }

  //   console.log('item.weight_1: ', item.weight_1, 'item.weight_2: ', item.weight_2, 'item.weight_diff: ', item.weight_diff );
  // }

  // $ctrl.getElementHight = function(item ,index) {
  //   var promise = DataService.getElementHight(item._id);
  //   promise.then(function(response) {
  //     hight = response.absorber_hight;
  //     return hight;
  //   }).then(function(hight) {
  //     item.data.absorber_hight = hight;
  //     item.data.actual_absorber_density = Math.round((item.data.absorber_weight/(7.85*item.diameter_avg*item.diameter_avg*item.data.absorber_hight)*1000).toPrecision(3)*100)/100;
  //   });
  // }

  // $ctrl.putInfo = function(myData, myIndex) {
  //   console.log(myData);
  //   var promise = DataService.putInfo(myData);
  //   promise.then($ctrl.remove(myIndex));
  // }

}


})();