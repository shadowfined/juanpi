
angular.module('newModule',[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home.new',{
                url:'/new',
                templateUrl: 'components/home/new/new.html',
                controller:'newCtrl',
                css:['components/home/new/new.css','components/home/home.css']
            })

    })
    .service('swiper',['$timeout',function($timeout){
        $timeout(function(){
            new Swiper ('.swiper-container', {
                loop: true,
                autoplay:500,
                pagination: '.swiper-pagination'
            })
        },100);
    }])

    .controller('newCtrl',['$scope','$http','swiper',function($scope,$http){
        $http.get('json/newpage.json').success(function (res) {

            $scope.banner=res.banner_ads;
            var new_ads=res.module_ads.multi_block;
            for (var i in new_ads){
                var newad=new_ads[0].data;
                var newad2=new_ads[1].data;

                for(var k in newad2){
                    $scope.newads2=newad2[0].child;
                }
                for (var j in newad){
                    $scope.newads=newad[0].child;
                }
            }



        })
        $http.get('json/new.json').success(function (res2) {

            $scope.newmain=res2.list;
            var newm1=res2.list;

            for (var i in newm1){
                var star=newm1[0].coupon;
                $scope.newsame=star.aeBankInfo
            }

        })
    }])