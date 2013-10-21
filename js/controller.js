/**
 * Simple Wrapper function
 *
 * NOTE: All $-prefixed variables signal AngularJS-provided ones
 */
function Todos($resource) {
  return $resource('http://goldenwolf-demoapp-api.herokuapp.com/todos/:todoId');
}

/**
 * Controls the index.html
 *
 * Demonstrates listening for events ($rootScope.$on) as well as emitting them
 * ($rootScope.$emit)
 *
 * $scope - scope of the controller
 * $rootScope - every scope has a parent; this is the root of them all
 * $resource - AngularJS service that can wrap any REST endpoint
 */
function IndexCtrl($scope, $rootScope, $resource) {
  $scope.todos = []; // Setup a scope variable; available here and in the template
  
  /**
   * Registers an event handler for 'refreshTodos'. Anything that $emit()s on the
   * root scope will trigger this refresh. This is performing communication between
   * controllers.
   */
  $rootScope.$on('refreshTodos', function(event) {
    $scope.isLoading = true;
    // Trigger the GET of the REST service; returns an array into $scope.todos
    $scope.todos = Todos($resource).query(function() {
      $scope.isLoading = false; // We can also pass a function into query() - called on completion
    });
  });
  
  /**
   * Triggers a refresh (via emitting the signal our controller needs)
   *
   * The 'refresh' function is available in the related template and can be called simply
   * by calling 'refresh()'.
   */
  $scope.refresh = function() {
    $rootScope.$emit('refreshTodos')  
  };
  
  $scope.refresh(); // We can also call scope-bound functions from the controller
}

/**
 * Simple controller to handle adding a new Todo
 *
 * $scope - see above
 * $rootScope - see above (we use it here to emit the refreshTodos event)
 * $location - provides access to change the browser URL
 * $resource - see above
 * $routeParams - provides access to the parameters that have been passed on the URL
 */
function AddCtrl($scope, $rootScope, $location, $resource, $routeParams) {
  var Todo = Todos($resource);
  
  $scope.addTodo = function() {
    var newTodo = new Todo(); 
    newTodo.text = $scope.todoText;
    // We $save the todo; $resource will send a JSON object.
    newTodo.$save(function(savedTodo) {
      // Once the save has completed, we wish to return the user to the index page (i.e. todo
      // list). We trigger a refresh of the todos and then redirect the browser to the root
      $rootScope.$emit('refreshTodos');
      $location.path('/');      
    });
  };
}

/**
 * Enables viewing of a single Todo
 *
 * All parameters - see above
 */
function ViewTodoCtrl($scope, $resource, $routeParams) {
  var Todo = Todos($resource);
  
  // Trigger a GET of a single result; todoId will be a query parameter sent to the REST
  // end point. We could also pass in a function if we wanted to do some actions on success
  $scope.todo = Todo.get({todoId: $routeParams.todoId});
}