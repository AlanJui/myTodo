'use strict';

/**
 * @ngdoc function
 * @name myTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myTodoApp
 */
angular.module('myTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
