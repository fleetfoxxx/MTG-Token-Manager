var app = angular.module('MTGTM', ['ui.router', 'angucomplete-alt']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: '/home.html',
         controller: 'MainCtrl'
      })

   $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', function($scope){
   $scope.testCardSearch = function(){
      if (!$scope.cardName || $scope.cardName === '') {return;}

      console.log($scope.cardName);
      $scope.cardName = '';
   }
}]);

app.controller('NavCtrl', ['$scope', function($scope){
   
}]);

app.controller('CardSearchCtrl', ['$scope', function($scope){
   var self = this;
   self.selectedItem;
}]);