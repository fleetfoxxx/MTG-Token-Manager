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

// factories

app.factory('tokens', ['$http', function($http){

   var o = {
      get: function(id) {
         return $http.get('/tokens/' + id).then(function(res){
            return res.data;
         });
      },
      getAll: function() {
         return $http.get('/tokens').success(function(res){
            return res.data;
         });
      },
      findByName: function(str) {
         return $http.get('/tokens/query/'+str).success(function(res){
            return res.data;
         });
      }
   };

   return o;
}]);

// controllers

app.controller('MainCtrl', ['$scope', function($scope){

}]);

app.controller('NavCtrl', ['$scope', function($scope){
   
}]);

app.controller('CardSearchCtrl', ['$scope', 'tokens', function($scope, tokens){
   tokens.getAll().then(function(res){
      $scope.tokenArray = res.data;
   });

   $scope.cardSearch = function(){
      if (!$scope.selectedItem || $scope.selectedItem === '') {return;}
      $scope.picURL = $scope.selectedItem.originalObject.mtgSet[0].picURL;
   }

   $scope.inputChanged = function(str){
      str = str.trim();
      if (str) {
         tokens.findByName(str).then(function(res){
            $scope.tokenArray = res.data;
         });
      }   
   }
}]);