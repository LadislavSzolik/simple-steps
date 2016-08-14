angular.module('editModule')

.service('editService', ['startService','marked', function(startService, marked) {
  this.convertFromListOfItems = function(objectList) {
    this.inputContent = "";
    for(i = 0; i < objectList.length; i++) {
        this.inputContent += objectList[i]["status"] + " " + objectList[i]["text"];
        this.inputContent += "\n";
    }
  }
}]);
