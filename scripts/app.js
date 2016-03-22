(function(){
  angular.module("ngClassifieds", ['ngMaterial', 'ngAnimate', 'ui.router', 'firebase', 'LocalStorageModule'])
    .config(function($mdThemingProvider, $stateProvider, localStorageServiceProvider, $urlRouterProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      
      localStorageServiceProvider
        .setPrefix('ngClassifieds')
        .setStorageType('sessionStorage')
        .setStorageCookieDomain('')
        .setNotify(true, true);
       $urlRouterProvider.otherwise('/login');
      $stateProvider
        .state('classifieds',{
          url: '/classifieds',
          templateUrl: 'components/classifieds/classifieds.tpl.html',
          controller: 'classifiedsCtrl as vm'
        })
        .state('classifieds.new',{
          url: '/new',
          templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
          controller: 'newClassifiedsCtrl as vm'
        })
        .state('classifieds.edit',{
          url: '/:id/edit',
          templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
          controller: 'editClassifiedsCtrl as vm',
          params: {
            classified: null
          }
        })
        .state('login',{
          url: '/login',
          templateUrl: 'components/login/login.tpl.html',
          controller: 'loginCtrl'
        })
        .state('toDoList',{
          url: '/toDoList',
          templateUrl: 'components/toDos/toDo.tpl.html',
          controller: 'toDoCtrl',
          controller: 'toDoCtrl as vm'
        })
       .state('Calculator', {
          url: '/Calculator',
          templateUrl: 'components/calculator/calc.tpl.html',
          controller: 'CalculatorController'
        })
      ;
    });
})();