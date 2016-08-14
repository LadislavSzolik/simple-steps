angular.module('startModule',['ngRoute', 'hc.marked','ngSanitize'])

.constant("baseURL", "http://localhost:3000/")

.service('startService', ['marked','$http','baseURL', function(marked, $http, baseURL) {
    this.getList = function (){
      return $http.get(baseURL + "list");
    };
}]);
