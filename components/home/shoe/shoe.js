/**
 * Created by YZTC on 2017/5/26.
 */
angular.module('shoeModule',[])
.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('home.shoe',{
            url:'/shoe',
            templateUrl: 'components/home/shoe/shoe.html',
            controller:'shoeCtrl',
            css:['components/home/shoe/shoe.css','components/home/home.css']
        })
})
    .controller('shoeCtrl',['$scope','$http',function($scope,$http){
    $http.get('json/shoespage.json').success(function (res) {
        var w_1=res.module_ads.multi_block;
        for (var i in w_1){
            console.log(w_1[3].data)
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
            var w7=w_1[5].data;
            for (var l in w7){
                $scope.mhead6=w7[l].child;
            }


        }

    })
        $http.get('json/shoes.json').success(function (res2) {
            $scope.newmain=res2.list;
            var newm1=res2.list;

            for (var i in newm1){
                var star=newm1[0].coupon;
                $scope.newsame=star.aeBankInfo
            }

        })
    }])