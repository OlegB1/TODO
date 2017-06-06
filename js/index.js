var app = angular.module('myApp', []);
app.controller('taskCtrl', function($scope) {
    $scope.taskArr = [];

    $scope.orderBy = function(x) {
        $scope.order = x;
    };

    $scope.addTask = function () {
        if (!$scope.task){
            return
        }

        $scope.taskArr.some(function (item) {
            $scope.isSameTask = false;
            if(item.task.toLowerCase() === $scope.task.toLowerCase()){
                return $scope.isSameTask = true
            }
        });

        pushTaskToArray($scope.task);
        $scope.task = null;
    };

    $scope.deleteTask = function (task) {
        var index = $scope.taskArr.indexOf(task);
        $scope.taskArr.splice(index, 1);
        $scope.taskArr.forEach(function(item, index){
            item.number = index + 1;
        });
        console.log($scope.taskArr)
    };

    function  pushTaskToArray(task) {
        $scope.taskArr.push({task: $scope.task});
        $scope.taskArr.forEach(function(item){
            item.number = $scope.taskArr.indexOf(item) + 1;
        });
        console.log($scope.taskArr)
    }
});
