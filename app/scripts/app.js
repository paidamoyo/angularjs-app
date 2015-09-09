
(function () {
  /* global app:true */
  'use strict';

  var app = angular.module('greWordsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/words.html',
        controller: 'WordsController'
      })
      .when('/words/:wordId', {
        templateUrl: 'views/showword.html',
        controller: 'WordViewController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
}());
