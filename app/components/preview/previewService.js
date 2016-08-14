angular.module('previewModule')

.service('previewService', ['startService','marked', function(startService, marked) {
  this.rawList;
  this.objectList = [];

  this.convertIntoListOfItems = function(inputFromEditView) {
    this.inputContent = inputFromEditView;
    this.objectList = [];
    this.rawList = this.inputContent.split("\n");
    // remove the first empty item
    // this.rawList.shift();
    for(item in this.rawList) {
      if (this.rawList[item] == "")
        break;
      var statusStr = this.rawList[item].substring(0, 3);
      var textStr = this.rawList[item].substring(3);
      var doneCode = false;
      switch (statusStr) {
        case "[x]":
            doneCode = true;
            break;
        case "[-]":
            doneCode = false;
            break;
      }

      this.objectList.push({text: textStr, status: statusStr, done: doneCode});
    }
  }

}]);
