var studentApp = angular.module('studentApp', []);

studentApp.controller('newStudent', [$scope, function($scope, $http){
    var registerStudent = function(){
        dpd.student.post({"FirstName":$scope.firstName,"LastName":$scope.lastName,"Address1":$scope.address1,"Address2":$scope.address2,"State":$scope.state,"City":$scope.city,"Zip":$scope.zip}, function(result, err) {
            if(err) return console.log(err);
            console.log(result, result.id);
        });
    }
}]);