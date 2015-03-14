(function () {
    angular.module('dczSite', ['ngRoute', 'controllers'])
    
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/src/partials/home.html'
            })
            .when('/test_area', {
                controller: 'testAreaController',
                controllerAs: 'testAreaCtrl',
                templateUrl: 'js/src/partials/test_area.html'
            })
            .when('/more', {
            templateUrl: 'js/src/partials/more.html'
            })
            .otherwise({
                redirectTo: '/home'
            })
    })
    
    .controller('appController', ['$location', function ($location) {
         this.location = $location;   
    }]);
}());