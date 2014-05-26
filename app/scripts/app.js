/* global app:true */
'use strict';

var app = angular.module('angularjsAppApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ])
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
