// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//   });
// })

.run(['$ionicPlatform', '$ionicPopup', '$rootScope', '$location', function($ionicPlatform, $ionicPopup, $rootScope, $location, $timeout, $ionicHistory, $cordovaToast) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    // 双击退出功能
    // $ionicPlatform.registerBackButtonAction(function(e) {
    //     function showConfirm() {
    //         var confirmPopup = $ionicPopup.confirm({
    //             title: '<strong>退出应用?</strong>',
    //             template: '你确定要退出应用吗?',
    //             okText: '退出',
    //             cancelText: '取消'
    //         });

    //         confirmPopup.then(function(res) {
    //             if (res) {
    //                 ionic.Platform.exitApp();
    //             } else {
    //                 // alert('tui');
    //             }
    //         });
    //     }
    //     // 判断处于哪个页面时双击退出
    //     if ($location.path() === '/app/playlists' || $location.path() === '/app/collection' || $location.path() === '/app/more' || $location.path() === '/app/login' || location.path() === '/app/search') {
    //         if ($rootScope.backButtonPressedOnveToExit) {
    //             ionic.Platform.exitApp();
    //         } else {
    //             if ($cordovaToast) {
    //                 $rootScope.backButtonPressedOnveToExit = true;
    //                 $cordovaToast.showShortTop('再按一次退出系统').then(function(success) {
    //                     alert('a');
    //                 }, function(error) {
    //                     showConfirm();
    //                 });
    //                 setTimeout(function() {
    //                     $rootScope.backButtonPressedOnveToExit = false;
    //                 }, 2000);
    //             } else {
    //                 return false;
    //             }
    //         }
    //     } else if ($ionicHistory.backView()) {
    //         $ionicHistory.goBack();
    //         showConfirm();
    //     } else {
    //         $rootScope.backButtonPressedOnveToExit = true;
    //         $cordovaToast.showShortTop('再按一次退出系统');
    //         setTimeout(function() {
    //             $rootScope.backButtonPressedOnveToExit = false;
    //         }, 2000);
    //     }

    //     e.preventDefalut();
    //     return false;

    // }, 101);



    // 主页面显示退出提示框
    $ionicPlatform.registerBackButtonAction(function(e) {

        e.preventDefault();

        function showConfirm() {
            var confirmPopup = $ionicPopup.confirm({
                title: '<strong>退出应用?</strong>',
                template: '你确定要退出应用吗?',
                okText: '退出',
                cancelText: '取消'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    ionic.Platform.exitApp();
                } else {
                    // alert('tui');
                }
            });
        }

        // Is there a page to go back to?
        if ($location.path() === '/app/playlists' || $location.path() === '/app/collection' || $location.path() === '/app/more' || $location.path() === '/app/login' || location.path() === '/app/search') {
            showConfirm();
        } else if ($rootScope.$viewHistory.backView) {
            console.log('currentView:', $rootScope.$viewHistory.currentView);
            // Go back in history
            $rootScope.$viewHistory.backView.go();
        } else {
            // This is the last page: Show confirmation popup
            showConfirm();
        }

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

    // .state('app.profile', {
    //   url: '/profile',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/profile.html'
    //     }
    //   }
    // })

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

    // .state('app.browse', {
    //     url: '/browse',
    //     views: {
    //       'menuContent': {
    //         templateUrl: 'templates/browse.html'
    //       }
    //     }
    //   })

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
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
});
