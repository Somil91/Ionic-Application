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
/*
$scope.navToMyHome = function(homeData){
  $stateProvider.state('myState', {
    url: '/myState',
    params: {homeData: homeData}});
}*/

  $scope.getAllHomes();

}])

.controller('myHomeCtrl', ['$scope','$state','$stateParams','GetData','EPA',
  function($scope,$state,$stateParams,GetData,EPA) {

console.log($stateParams.homeData);
  $scope.tabOption = {
    'homeDetails':true,
    'productList':false,
    'addProduct':false
  };

  $scope.myHomeData = {
    'homeDetails':$stateParams.homeData
  };

  $scope.showTab = function(tabName){
    if(tabName==="productList"){
      $scope.tabOption = {'homeDetails':false,'productList':true ,'addProduct':false };
    }
    else if(tabName==="addProduct"){
      $scope.tabOption = {'homeDetails':false,'productList':false ,'addProduct':true };
    }
    else if(tabName==="homeDetails"){
      $scope.tabOption = {'homeDetails':true,'productList':false ,'addProduct':false };
    }
  }

  $scope.getAllHomeProducts = function() {
    GetData.getDataItems(EPA.BASE + EPA.All_HOME_PRODUCTS + $scope.myHomeData.homeDetails.name)
      .then(function(data) {
        console.log("All products Found");
        $scope.myHomeData.productsData = data;
        // Utils.asyncLoader("hidden");
      }, function(error) {
        console.log("Error calling all products link");
        // Utils.asyncLoader("hidden");
        // Utils.showMessageToast("error", "Error: Unable to load stocks details.");
      });
  }

    $scope.getAllHomeProducts();


}])

.controller('aboutUsCtrl', function($scope) {

})
