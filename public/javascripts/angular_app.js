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
   $scope.selectedTokenArray = [];

   tokens.getAll().then(function(res){
      $scope.tokenArray = res.data;
   });

   $scope.cardSearch = function(){
      if (!$scope.selectedItem || $scope.selectedItem === '') {return;}
      $scope.selectedTokenArray.push($scope.selectedItem.originalObject);
      $scope.$broadcast('angucomplete-alt:clearInput', 'cardNameInput');
   }

   $scope.inputChanged = function(str){
      str = str.trim();
      if (str) {
         tokens.findByName(str).then(function(res){
            $scope.tokenArray = res.data;
         });
      }   
   }

   $scope.tokenClick = function($event){
      $($event.target).toggleClass('token-tapped');      
   }
}]);

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'contain',
            'background-position' : 'center',
            'background-repeat' : 'no-repeat'
        });
    };
});