angular.module('previewModule', ['ngRoute', 'hc.marked','ngSanitize'])

.controller('previewController',['$scope', 'simpleStapService', function($scope, simpleStapService){
  $scope.objectList = simpleStapService.objectList;

  $scope.copyText = function(stepText) {
    //clipboard.writeText(stepText);
  };

  $scope.toggleDone = function(index) {
    if(simpleStapService.objectList[index].done) {
      simpleStapService.objectList[index].done = false;
    } else {
      simpleStapService.objectList[index].done = true;
    }
    $scope.objectList = simpleStapService.objectList;
  };
}]);
