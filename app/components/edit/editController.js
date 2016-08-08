angular.module('editModule', ['ngRoute', 'hc.marked','ngSanitize'])

.controller('editController',['$scope', 'simpleStapService', function($scope, simpleStapService){
  $scope.inputContent = simpleStapService.inputContent;

  $scope.convert = function() {
    simpleStapService.convertIntoListOfItems($scope.inputContent);
  }

}]);
