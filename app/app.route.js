angular.module('simpleStepApp', ['startModule','previewModule','editModule','ngRoute', 'hc.marked','ngSanitize'])

.config(['$routeProvider','markedProvider', function($routeProvider, markedProvider){
  markedProvider.setOptions({gfm: true});

  $routeProvider.when('/startView', {
    templateUrl: 'app/components/start/startView.html'
  })
  .when('/editView',{
    templateUrl: 'app/components/edit/editView.html'
  })
  .when('/previewView', {
    templateUrl: 'app/components/preview/previewView.html'
  })
  .otherwise({
    redirectTo: '/startView'
  });
}]);
