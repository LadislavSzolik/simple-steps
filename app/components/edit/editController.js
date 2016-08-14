angular.module('editModule', ['startModule','ngRoute', 'hc.marked','ngSanitize'])

.controller('editController',['$scope', 'previewService', 'startService', 'editService', function($scope, previewService, startService, editService){
  $scope.inputContent = "";
  $scope.objectList = [];

  if(!editService.inputContent) {
    startService.getList().
    then(
      function(response) {
        $scope.objectList = response.data;
        for(i = 0; i < $scope.objectList.length; i++) {
            $scope.inputContent += $scope.objectList[i]["status"] + " " + $scope.objectList[i]["text"];
            $scope.inputContent += "\n";
        }
      }
    );
  } else {
    $scope.inputContent = editService.inputContent;
  }
  $scope.convert = function() {
    previewService.convertIntoListOfItems($scope.inputContent);
  }
}]);
