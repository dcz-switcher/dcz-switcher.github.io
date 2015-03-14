(function () {
    angular.module('controllers', [])
    
    .controller('testAreaController', [function () {
        this.btnClicked = function () {
            GLOBALS.playFeedback();
        }
    }]);
}());