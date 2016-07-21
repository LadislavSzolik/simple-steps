const clipboard = require('electron').clipboard

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

  $scope.steps = {textInput : simpleStapService.getInputText()};


  $scope.runButton = function() {
    simpleStapService.saveSteps($scope.steps.textInput);
  }

}]);



simpleStepApp.controller('stepListController', ['$scope', 'simpleStapService', function($scope, simpleStapService) {
    var stepList = this;
    stepList.steps = simpleStapService.getSteps();

    $scope.backButton = function() {
      simpleStapService.updateSteps(stepList.steps);
    }

    $scope.copyText = function(stepText) {
      clipboard.writeText(stepText);
    }

  }]);

  simpleStepApp.service('simpleStapService', function() {
    this.inputText = [];
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

    this.getInputText = function() {
      return this.inputText;
    }

    this.updateSteps = function(listOfSteps) {
      this.inputText = [];

      for(stepItem in listOfSteps) {
        this.inputText.push(listOfSteps[stepItem].text);
      }
      console.log(this.inputText);
    }

    this.getSteps = function() {
      if(this.steps.length < 1){
        return [{text:"Empty list", done: false}];
      }
      return this.steps;
    }

});

simpleStepApp.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
