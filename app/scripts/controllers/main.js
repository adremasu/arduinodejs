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
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addTodo = function(){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    }

    $scope.removeTodo =  function(index){
        $scope.todos.splice(index, 1);

    }
  });
