angular.module('app.controllers', ['app.services'])

.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.login = {};
    $scope.checkLoginCredentials = function() {
        if ($scope.login.username === "hile" && $scope.login.password === "123") {
            console.log("Successful Admin login");
            $state.go('tabsController.allHomes');
        }
    }
}])

.controller('homeDetailsCtrl', function($scope) {

})

.controller('allHomesCtrl', ['$scope', 'GetData', 'EPA', function($scope, GetData, EPA) {

	$scope.allHomes  = {};
    $scope.getAllHomes = function() {
        GetData.getDataItems(EPA.BASE + EPA.ALL_HOMES)
            .then(function(data) {
                console.log("All Homes Found");
                $scope.allHomes.homesList = data;
                // Utils.asyncLoader("hidden");
            }, function(error) {
                console.log("Error calling all homes link");
                // Utils.asyncLoader("hidden");
                // Utils.showMessageToast("error", "Error: Unable to load stocks details.");
            });
    }

    $scope.getAllHomes();

}])

.controller('myHomeCtrl', function($scope) {

})

.controller('aboutUsCtrl', function($scope) {

})
