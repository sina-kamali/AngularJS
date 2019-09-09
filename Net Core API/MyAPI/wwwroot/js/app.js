
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    try {
         $http.get('/api/Rules').then(function successCallback(response) {
             $scope.rules = response.data;
             console.log(response.data)
    }, function errorCallback(response) {
        console.log(response);
    });

    } catch(e){
        console.log(e);
    }
     

    $scope.newRule = '';
    $scope.addRule = function () {
        try {
            $http.post('/api/Rules', { newRule: $scope.newRule })
            .success(function (result) {

                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';

            })
            .error(function (data, status) {

                console.log(data);

            });
        } catch(e){
           console.log(e);
        }

    };
}]);