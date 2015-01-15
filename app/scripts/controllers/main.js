'use strict';

/**
 * @ngdoc function
 * @name myTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myTodoApp
 */
angular.module('myTodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    // $scope.todos = [];
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
        localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    }

    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    };
  });
