angular.module('previewModule', ['startModule','editModule','ngRoute', 'hc.marked','ngSanitize'])

.controller('previewController',['$scope', 'startService', 'previewService', 'editService', function($scope, startService, previewService, editService){
  $scope.objectList = previewService.objectList;

  $scope.copyText = function(stepText) {
    //clipboard.writeText(stepText);
  };

  $scope.toggleDone = function(index) {
    if(previewService.objectList[index].done) {
      previewService.objectList[index].done = false;
      previewService.objectList[index].status = "[ ]";
    } else {
      previewService.objectList[index].done = true;
      previewService.objectList[index].status = "[x]";
    }
    $scope.objectList = previewService.objectList;
  };

  $scope.convert = function() {
    editService.convertFromListOfItems($scope.objectList);
  }
}]);
