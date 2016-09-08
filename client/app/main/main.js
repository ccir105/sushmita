'use strict';

angular.module('bikramApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/test.html',
      });

      $stateProvider
      .state('bikram', {
        url: '/bikram',
        templateUrl: 'app/main/bikram.html',
      });
  });
