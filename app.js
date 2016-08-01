// const clipboard = require('electron').clipboard
//var fs = require('fs');

var simpleStepApp = angular.module('simpleStepApp', ['ngRoute', 'hc.marked','ngSanitize']);

simpleStepApp.config(['$routeProvider','markedProvider', function($routeProvider, markedProvider){
  markedProvider.setOptions({gfm: true});

  $routeProvider.when('/startView', {
    templateUrl: 'startView.html'
  })
  .when('/editView',{
    templateUrl: 'editView.html'
  })
  .when('/previewView', {
    templateUrl: 'previewView.html'
  })
  .when('/list', {
    templateUrl: 'list.html'
  }).otherwise({
    redirectTo: '/startView'
  });
}]);


simpleStepApp.controller('editViewController',['$scope', 'simpleStapService', function($scope, simpleStapService){
  $scope.inputContent = simpleStapService.inputContent;

  $scope.convert = function() {
    simpleStapService.convertIntoListOfItems($scope.inputContent);
  }

}]);

simpleStepApp.controller('previewViewController',['$scope', 'simpleStapService', function($scope, simpleStapService){
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


  simpleStepApp.service('simpleStapService', ['marked', function(marked) {

    this.inputContent = "[] todo [] todo [] todo" ;
    this.rawList;
    this.objectList;

    this.convertIntoListOfItems = function(inputFromEditView) {
      this.inputContent = inputFromEditView;
      this.objectList = [];
      this.rawList = this.inputContent.split("[]");
      // remove the first empty item
      this.rawList.shift();
      for(item in this.rawList) {
        this.objectList.push({text: this.rawList[item], done:false});
      }
    }
}]);
