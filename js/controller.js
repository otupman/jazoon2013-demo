function Todos($resource) {
  return $resource('http://goldenwolf-demoapp-api.herokuapp.com/todos/:todoId');
}

function IndexCtrl($scope, $rootScope, $resource, $route) {
  $scope.todos = [];
  
  $rootScope.$on('refreshTodos', function(event) {
    $scope.isLoading = true;
    $scope.todos = Todos($resource).query(function() {
      $scope.isLoading = false; 
    });
  });
  
  $scope.refresh = function() {
    $rootScope.$emit('refreshTodos')  
  };
  
  $scope.refresh();
}

function AddCtrl($scope, $rootScope, $location, $resource, $routeParams) {
  var Todo = Todos($resource);
  
  $scope.addTodo = function() {
    var newTodo = new Todo();
    newTodo.text = $scope.todoText;
    newTodo.$save(function(savedTodo) {
      $rootScope.$emit('refreshTodos');
      $location.path('/');      
    });
  };
}

function ViewTodoCtrl($scope, $resource, $routeParams) {
  var Todo = Todos($resource);
  
  $scope.todo = Todo.get({todoId: $routeParams.todoId});
}