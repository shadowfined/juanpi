angular.module('womenModule',[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home.women',{
                url:'/women',
                templateUrl: 'components/home/women/women.html',
                controller:'womenCtrl',
                css:['components/home/women/women.css','components/home/home.css']
            })
    })
    .controller('womenCtrl',['$scope','$http',function($scope,$http){
        $http.get('json/girlpage.json').success(function (res) {
            //console.log(res.module_ads.multi_block)
            var w_1=res.module_ads.multi_block;
            for (var i in w_1){

                    var w2=w_1[0].data;
                        for (var j in w2){
                            $scope.mhead=w2[j].child;
                        }
                    var w3=w_1[1].data;
                        for (var k in w3){
                        $scope.mhead2=w3[k].child;
                        }
                    var w4=w_1[2].data;
                        for (var l in w4){
                            $scope.mhead3=w4[l].child;
                        }
                    var w5=w_1[3].data;
                        for (var l in w5){
                            $scope.mhead4=w5[l].child;
                        }
                var w6=w_1[4].data;
                for (var l in w6){
                    $scope.mhead5=w6[l].child;
                }


            }
        });
        $http.get('json/girl.json').success(function (res2) {
            $scope.newmain=res2.list;
            var newm1=res2.list;

            for (var i in newm1){
                var star=newm1[0].coupon;
                $scope.newsame=star.aeBankInfo
            }

        })
    }]);