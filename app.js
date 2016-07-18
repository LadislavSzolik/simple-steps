var simpleStepApp = angular.module('simpleStepApp', ['ngRoute']);

simpleStepApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/inputArea', {
    templateUrl: 'inputArea.html'
  })
  .when('/list', {
    templateUrl: 'list.html'
  }).otherwise({
    redirectTo: '/inputArea'
  });
}]);

simpleStepApp.controller('textAreaController',['$scope','simpleStapService', function($scope, simpleStapService){


  $scope.steps = {textInput : simpleStapService.inputText}

  $scope.runButton = function() {
    simpleStapService.saveSteps($scope.steps.textInput);
  }

}]);



simpleStepApp.controller('stepListController', ['$scope', 'simpleStapService', function($scope, simpleStapService) {
    var stepList = this;
    stepList.steps = simpleStapService.getSteps();

  }]);

  simpleStepApp.service('simpleStapService', function() {
    this.inputText = null;
    this.steps = [];
    this.saveSteps = function (inputText) {
      this.inputText = inputText;
      this.steps = [];
      this.tranformTextAreaToObjects();
    }

    this.tranformTextAreaToObjects = function() {
      for(step in this.inputText) {
        this.steps.push({text:this.inputText[step], done:false});
      }

    }

    this.getSteps = function() {
      return this.steps;
    }

});
