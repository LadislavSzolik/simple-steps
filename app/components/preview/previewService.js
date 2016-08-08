angular.module('previewModule')

.service('simpleStapService', ['marked', function(marked) {

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
