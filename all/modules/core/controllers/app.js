'use strict';

/**
 * @ngdoc overview
 * @name To Do App
 * @description
 * # To do Application
 *
 * Main module of the application.
 */
angular
    .module('iDeel', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/core/views/welcome.html'
            })
            .when('/about_us', {
                templateUrl: 'modules/core/views/about_us.html'
            })
            .when('/send_comments', {
                templateUrl: 'modules/comments/views/send_comments.html'
            })
            .when('/registration', {
                templateUrl: 'modules/core/views/registration.html'
            })
            .when('/login', {
                templateUrl: 'modules/core/views/login.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
