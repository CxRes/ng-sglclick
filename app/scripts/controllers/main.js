'use strict';

/**
 * @ngdoc function
 * @name ngSglclickApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngSglclickApp
 */
angular.module('ngSglclickApp')
  .controller('MainCtrl', function ($scope) {

    $scope.once = function(msg) {
      msg.push('Hit once');
    };

    $scope.twice = function(msg) {
      msg.push('Hit twice');
    };
  });
