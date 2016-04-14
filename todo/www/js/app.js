// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(['$ionicPlatform', '$rootScope', '$location', '$timeout', '$ionicHistory', '$cordovaToast', '$cordovaKeyboard', function($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory, $cordovaToast, $cordovaKeyboard) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });

    //物理返回按钮控制&双击退出应用
    $ionicPlatform.registerBackButtonAction(function(e) {
        //判断处于哪个页面时双击退出
        if ($location.path() == '/app/playlists' || $location.path() == '/app/search' || $location.path() == '/app/collection' || $location.path() == '/app/more' || $location.path() == '/app/login' || $location.path() == '/app/regist') {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                $cordovaToast.showShortBottom('再按一次退出系统');
                setTimeout(function() {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
        } else if ($ionicHistory.backView()) {
            if ($cordovaKeyboard.isVisible()) {
                $cordovaKeyboard.close();
            } else {
                $ionicHistory.goBack();
            }
        } else {
            $rootScope.backButtonPressedOnceToExit = true;
            $cordovaToast.showShortBottom('再按一次退出系统');
            setTimeout(function() {
                $rootScope.backButtonPressedOnceToExit = false;
            }, 2000);
        }
        e.preventDefault();
        return false;
    }, 101);
}])



.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html'
            }
        }
    })

    .state('app.regist', {
        url: '/regist',
        views: {
            'menuContent': {
                templateUrl: 'templates/new.html'
            }
        }
    })

    .state('app.collection', {
        url: '/collection',
        views: {
            'menuContent': {
                templateUrl: 'templates/collection.html'
            }
        }
    })

    .state('app.detail', {
        url: '/detail',
        views: {
            'menuContent': {
                templateUrl: 'templates/detail.html'
            }
        }
    })

    .state('app.more', {
        url: '/more',
        views: {
            'menuContent': {
                templateUrl: 'templates/more.html'
            }
        }
    })

    .state('app.dialog', {
        url: '/playlists/profile/dialog',
        views: {
            'menuContent': {
                templateUrl: 'templates/dialog.html'
            }
        }
    })

    .state('app.about', {
        url: '/more/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html'
            }
        }
    })

    .state('app.playlists', {
        url: '/playlists',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlists.html',
                controller: 'PlaylistsCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/playlists/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'PlaylistCtrl'
            }
        }
    })

    .state('app.newItem', {
        url: '/playlists/newItem',
        
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
});
