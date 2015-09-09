/* global app:true */
'use strict';

var app = angular.module('greWordsApps', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/words.html',
        controller: 'WordsCtrl'
      })
      .when('/words/:wordId', {
        templateUrl: 'views/showword.html',
        controller: 'WordViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
