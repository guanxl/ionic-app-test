angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicHistory) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $ionicHistory) {
  $scope.playlists = [
    { title: '王嘉明', id: 1, heart: 'true' },
    { title: '刘东', id: 2,  heart: 'true' },
    { title: '何仁生', id: 3,  heart: 'false' },
    { title: '郭小谦', id: 4,  heart: 'false' },
    { title: '刘小明', id: 5,  heart: 'false' },
    { title: '黄汉生', id: 6,  heart: 'true' }
  ];

  $scope.details = [
    { title1: 'biography', content1: "there are different types of doctors and what they do depends on their filed of specialty. If you are a budding doctor and want to know more about the career options related to types of doctors and what they do, then the following article will prove to be a useful read..."},
    { title1: 'biography', content1: "there are different types of doctors and what they do depends on their filed of specialty. If you are a budding doctor and want to know more about the career options related to types of doctors and what they do, then the following article will prove to be a useful read..."},
    { title1: 'biography', content1: "there are different types of doctors and what they do depends on their filed of specialty. If you are a budding doctor and want to know more about the career options related to types of doctors and what they do, then the following article will prove to be a useful read..."}
  ];

  $scope.searchInput = "";

  $scope.history = function($ionicHistory){
    $ionicHistory.backView();
    console.log("obj");
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
