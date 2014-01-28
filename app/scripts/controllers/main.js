'use strict';

angular.module('arduinodejsApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
		  'HTML5 Boilerplate',
		  'AngularJS',
		  'Karma'
		];
	});

angular.module('arduinodejsApp')
	.controller('TodoCtrl', function ($scope, localStorageService) {
		//$scope.todos = [];

		var todosInStore = localStorageService.get('todos');
		$scope.todos = todosInStore || [];

		$scope.$watch(function(){
			localStorageService.add('todos', $scope.todos);
		});


		$scope.addTodo = function(){
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};


		$scope.removeTodo =  function(index){
			$scope.todos.splice(index, 1);

		};
	});
