(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'public/public.html'
    })
    .state('public.home', {
      url: '/',
      component: 'home'
    })
    .state('public.incontroll', {
      url: '/incontroll',
      templateUrl: 'public/incontroll/incontroll.html',
      controller: 'InControllController as inCtrl',
      resolve: {
        items: ['DataService', function (DataService) {
          return DataService.getItemsToInControll();
        }]
      }
    })
    .state('public.nozzle', {
      url: '/nozzle',
      component: 'nozzle',
      params: {
        banch: null,
        itemId: null
      }
    })
    .state('public.nozzle.items', {
      component: 'nozzleItems',
      resolve: {
        items: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItemsToNozzle($transition$.params().banch);
        }]
      }
    })
    .state('public.nozzle.details', {
      views: {
        '@' : {
          component: 'nozzleDetails'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.stamp', {
      url: '/stamp',
      component: 'stamp',
      params: {
        banch: null,
        itemId: null
      }
    })
    .state('public.stamp.items', {
      component: 'stampItems',
      resolve: {
        items: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItemsToStamp($transition$.params().banch);
        }]
      }
    })
    .state('public.stamp.details', {
      views: {
        '@' : {
          component: 'stampDetails'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.weight', {
      url: '/weight',
      component: 'weight',
      params: {
        banch: null,
        itemId: null,
        itemClad: null
      }
    })
    .state('public.weight.items', {
      views: {
        '@': {
          component: 'weightItems',
        }
      },
      resolve: {
        items: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItemsToWeight($transition$.params().banch);
        }]
      }
    })
    .state('public.weight.details', {
      views: {
        '@': {
          component: 'weightDetails'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.density', {
      url: '/density',
      component: 'density',
      params: {
        banch: null,
        itemId: null
      }
    })
    .state('public.density.items', {
      views: {
        '@': {
          component: 'densityItems',
        }
      },
      resolve: {
        items: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItemsToDensity($transition$.params().banch);
        }]
      }
    })
    .state('public.density.titanate', {
      views: {
        '@': {
          component: 'titanateDensity'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.density.boron', {
      views: {
        '@': {
          component: 'boronDensity'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.height', {
      url: '/height',
      component: 'height',
      params: {
        banch: null,
        itemId: null,
        itemClad: null
      }
    })
    .state('public.height.items', {
      views: {
        '@': {
          component: 'heightItems'
        }
      },
      resolve: {
        items: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItemsToHeight($transition$.params().banch);
        }]
      }
    })
    .state('public.height.boron', {
      views: {
        '@': {
          component: 'boron'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.height.titanate', {
      views: {
        '@': {
          component: 'titanate'
        }
      },
      resolve: {
        item: ['DataService', '$transition$', function (DataService, $transition$) {
          return DataService.getItem($transition$.params().itemId);
        }]
      }
    })
    .state('public.outcontroll', {
      url: '/outcontroll',
      templateUrl: 'public/outcontroll/outcontroll.html',
      controller: 'OutControllController as outCtrl',
      resolve: {
        container: ['DataService', function (DataService) {
          return DataService.getContainer();
        }]
      }
    })
    .state('public.package', {
      url: '/package',
      templateUrl: 'public/package/package.html',
      controller: 'PackageController as pckCtrl'
    })
    .state('public.pdf', {
      url: '/pdf',
      templateUrl: 'public/pdf/pdf.html',
      controller: 'PDFController as pdfCtrl'
    })
    .state('public.edit', {
      url: '/edit',
      templateUrl: 'public/edit/edit.html',
      controller: 'EditController as edCtrl'
    })
    .state('public.report', {
      url: '/report',
      templateUrl: 'public/report/report.html',
      controller: 'ReportController as repCtrl',
      resolve: {
        items: ['DataService', function (DataService) {
          return DataService.getItemsToReport();
        }]
      }
    }).state('public.agent', {
      url: '/agent',
      templateUrl: 'public/agent/agent.html',
      controller: 'AgentController as agCtrl',
      resolve: {
        agents: ['DataService', function (DataService) {
          return DataService.getAgents();
        }]
      }
    }).state('public.agent.details', {
      templateUrl: 'public/agent/deck-details.html',
      controller: 'DeckController as deckCtrl',
      params: {
        deck: null
      }
    }).state('public.assembly', {
      url: '/assembly',
      templateUrl: 'public/assembly/assembly.html',
      controller: 'AssemblyController as asCtrl',
      params: {
        elementData: {
          banch: null,
          id: null,
          agentWgt: null,
          status: null
        },
        agentData: {
          isEmpty: null,
          weight: null,
          deck: null,
          id : null
        }
      }
    }).state('public.assembly.claddings', {
      url: '/claddings',
      templateUrl: 'public/assembly/claddings.html',
      controller: 'CladdingsController as cladCtrl',
      resolve: {
        items: ['DataService', '$stateParams', function(DataService, $stateParams) {
          return DataService.getBanchItems($stateParams.elementData.banch);
        }]
      }
    }).state('public.assembly.agents', {
      url: '/agents',
      templateUrl: 'public/assembly/agents.html',
      controller: 'AssemblyAgentsController as asagCtrl',
      resolve: {
        agents: ['DataService', '$stateParams', function(DataService, $stateParams) {
          return DataService.getDeckAgents($stateParams.agentData.deck);
        }]
      }
    }).state('public.tip', {
      url: '/tip',
      templateUrl: 'public/tip/tip.html',
      controller: 'TipController as tipCtrl',
      resolve: {
        tips: ['DataService', function(DataService) {
          return DataService.getTips();
        }]
      }
    });
  }

})();
