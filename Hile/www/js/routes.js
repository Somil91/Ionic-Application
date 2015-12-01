angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('tabsController', {
      url: '/home',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })

    .state('tabsController.allHomes', {
      url: '/allHomes',
      views: {
        'tab1': {
          templateUrl: 'templates/allHomes.html',
          controller: 'allHomesCtrl'
        }
      }
    })

    .state('tabsController.allHomes.myHome', {
      url: '/myHome',
      params:{homeData:null},
      views: {
        'tab1@tabsController': {
          templateUrl: 'templates/myHome.html',
          controller: 'myHomeCtrl'
        }
      }
    })

    .state('tabsController.homeDetails', {
      url: '/homeDetails',
      views: {
        'tab2': {
          templateUrl: 'templates/homeDetails.html',
          controller: 'homeDetailsCtrl'
        }
      }
    })
    .state('tabsController.aboutUs', {
      url: '/aboutUs',
      views: {
        'tab3': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    })






    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
