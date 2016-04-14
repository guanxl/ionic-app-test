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

.controller('PlaylistsCtrl', function($scope, $ionicHistory, $http, $timeout) {
    $scope.playlists = [
        { title: '王嘉明', id: 1, heart: 'true' },
        { title: '刘东', id: 2, heart: 'true' },
        { title: '何仁生', id: 3, heart: 'false' },
        { title: '郭小谦', id: 4, heart: 'false' },
        { title: '刘小明', id: 5, heart: 'false' },
        { title: '黄汉生', id: 6, heart: 'true' }
    ];

    $scope.details = [
        { title1: 'biography', content1: "there are different types of doctors and what they do depends on their filed of specialty. If you are a budding doctor and want to know more about the career options related to types of doctors and what they do, then the following article will prove to be a useful read..." },
        { title1: 'biography', content1: "there are different types of doctors and what they do depends on their filed of specialty. If you are a budding doctor and want to know more about the career options related to types of doctors and what they do, then the following article will prove to be a useful read..." },
        { title1: 'biography', content1: "there are different types of doctors and what they do depends on their filed of specialty. If you are a budding doctor and want to know more about the career options related to types of doctors and what they do, then the following article will prove to be a useful read..." }
    ];

    $scope.searchInput = "";

    $scope.history = function($ionicHistory) {
        $ionicHistory.backView();
        console.log("obj");
    };

    //下拉刷新
    $scope.item = 1;
    $scope.doRefresh = function() {
        // $http.get('/app/playlists/newItem')
        //     .success(function(newItems) {
        //         $scope.items = newItems;
        //     })
        //     .finally(function() {
        //         //停止广播ion-refresher
        //         $scope.$broadcast('scroll.refreshComplete');
        //     });
        console.log('Refreshing');
        $timeout(function() {
            var i = 0;
            $scope.playlists.unshift({ title: '王尼玛', id: 10 + $scope.item + 0, heart: 'true' });
            $scope.playlists.unshift({ title: '王尼玛', id: 10 + $scope.item + 1, heart: 'true' });
            $scope.playlists.unshift({ title: '王尼玛', id: 10 + $scope.item + 2, heart: 'true' });
            $scope.$broadcast('scroll.refreshComplete');
            $scope.item = $scope.item + 3;
        }, 1000);
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})

.controller('dialog', function($scope, $ionicScrollDelegate, $timeout) {

    $scope.load = function() {
        $ionicScrollDelegate.scrollBottom();
    };

    $scope.load2 = function() {
        $timeout(function() {
            $ionicScrollDelegate.scrollBottom();
        }, 600);
    };


    $scope.formSubmit = function() {
        var dialogForm = document.getElementById("dialogForm");
        var dialogTextArea = document.querySelector("#dialogForm>textarea");
        var textInput = document.querySelector("#text-input");
        var messageList = document.querySelector(".message-wrapper");

        function newMessage() {
            document.createElement('');
        }
        // 判断输入框是否有内容 | 表单提交 | 信息添加，显示
        if (textInput.innerHTML.trim() !== "") {
            dialogTextArea.innerText = textInput.innerText.trim();
            console.log(dialogTextArea.innerText);
            $scope.messages.push({ 'id': '123', 'text': dialogTextArea.innerText });
            textInput.innerText = "";
            $ionicScrollDelegate.scrollBottom();
            // dialogForm.submit();
        } else {
            return false;
        }
    };

    $scope.user = {
        id: '123',
        username: 'xiaoming'
    };
    $scope.messages = [
        { id: '123', text: '在不？' },
        { id: '987', text: '在' },
        { id: '123', text: '明天有事不？' },
        { id: '987', text: '没啊，咋了？' },
        { id: '123', text: '出去玩呗' },
        { id: '987', text: '去哪儿啊？' },
        { id: '123', text: '佘山' },
        { id: '123', text: '佘山森林公园' },
        { id: '987', text: '恩，好的，几点？' },
        { id: '123', text: '1993年5月，国家林业部批准在此建立国家森林公园。2000年被国家旅游局批准为首批“4A”级旅游景区；2012年被国家林业局森林公园管理办公室评为全国“最具影响力森林公园”。' },
        { id: '987', text: '好的，明天见' },
        { id: '987', text: 'ajshfdsjkhgfjhsdkfjhdskjhgajshfdsjkhgfjhsdkfjhdskjhgajshfdsjkhgfjhsdkfjhdskjhgajshfdsjkhgfjhsdkfjhdskjhgajfjhsdkfjhdskjhg' }
    ];

    // var watch = $scope.$watch('messages', function(newValue, oldValue, scope) {
    //   // console.log(newValue);
    //   // console.log(oldValue);
    // }, false);
})

.directive("appMap", function(){
    return {
        restrict: 'E',
        replace: true,
        template: "<div id='allMap'> </div>",
        scope: {
        },
        link: function($scope, $element, $attrs) {
            var map = new BMap.Map("allMap");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            map.addControl(new BMap.MapTypeControl());
            map.enableScrollWheelZoom(true);
        }
    };
});