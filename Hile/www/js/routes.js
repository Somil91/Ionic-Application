angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('tabsController.homeDetails', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/homeDetails.html',
          controller: 'homeDetailsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.allHomes', {
      url: '/page4',
      views: {
        'tab1': {
          templateUrl: 'templates/allHomes.html',
          controller: 'allHomesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('myHome', {
      url: '/page5',
      templateUrl: 'templates/myHome.html',
      controller: 'myHomeCtrl'
    })
        
      
    
      
    .state('tabsController', {
      url: '/page2',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.aboutUs', {
      url: '/page6',
      views: {
        'tab3': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    })
     
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});