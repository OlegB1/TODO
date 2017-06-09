var app = angular.module('myApp', []);

app.controller('taskCtrl', function($scope) {
    $scope.tasks = [];

    $scope.orderBy = function(property) {
        $scope.order = property;
    };

    $scope.addTask = function () {
        if (!$scope.task){
            return
        }

        $scope.isSameTask = $scope.tasks.some(function (item) {
            return item.task.toLowerCase() === $scope.task.toLowerCase()
        });
        if($scope.isSameTask==true){
            return
        }
        $scope.tasks.push({
            task: $scope.task,
            number: $scope.tasks.length+1
        })
        $scope.task = null;
    };

    $scope.deleteTask = function (task) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
        $scope.tasks.forEach(function(item, index){
            item.number = index + 1;
        });
        console.log($scope.tasks)
    };


});
