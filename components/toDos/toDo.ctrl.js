(function(){
    
    "use strict";
    
    angular.module('ngClassifieds').controller('toDoCtrl',['$scope' ,'$log' ,'$filter', function($scope ,$log ,$filter ){
   
    $scope.$parent.showNavbar = true;
    $scope.$parent.inClassifeds = false; 
    $scope.toDoFilter = '';    
    //
    $scope.saved = localStorage.getItem('todoList');
    $scope.completed=localStorage.getItem('completedToDos');;
	
    $scope.completedToDos = (localStorage.getItem('completedToDos')!==null) ? JSON.parse($scope.completed) : [ ];
    
    $scope.todoList = (localStorage.getItem('todoList')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];    
	
    localStorage.setItem('todoList', JSON.stringify($scope.todoList));

	$scope.addTodo = function() {
		$scope.todoList.push({
			text: $scope.todoItem,
			done: false
		});
		$scope.todoItem = ''; //clear the input after adding
		localStorage.setItem('todoList', JSON.stringify($scope.todoList));
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todoList, function(todo){
			count+= todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		var oldtodoList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldtodoList, function(todo){
			if (!todo.done)
				    $scope.todoList.push(todo);
            else{
                    todo.text = todo.text;
                    todo.done = false;
                    $scope.completedToDos.push(todo);
                }
		});
		localStorage.setItem('todoList', JSON.stringify($scope.todoList));
        localStorage.setItem('completedToDos', JSON.stringify($scope.completedToDos));
	};
        $scope.deleteTask = function(){
            var oldList = $scope.completedToDos;
            $scope.completedToDos = [];
            angular.forEach(oldList,function(task){
                if(!task.done)
                    $scope.completedToDos.push(task);
            });
            localStorage.setItem('completedToDos', JSON.stringify($scope.completedToDos));
        }
    }]);
})();