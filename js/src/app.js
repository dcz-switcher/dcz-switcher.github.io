(function () {
    angular.module('dczSite', ['ngRoute'])
    
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/src/partials/home.html'
            })
            .when('/test_area', {
                templateUrl: 'js/src/partials/test_area.html'
            })
            .when('/more', {
            templateUrl: 'js/src/partials/more.html'
            })
            .otherwise({
                redirectTo: '/home'
            })
    });
}());