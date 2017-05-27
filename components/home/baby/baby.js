angular.module('babyModule',[])
.config(function ($stateProvider,$urlRouterProvider)
{
    $stateProvider
        .state('home.baby',{
            url:'/baby',
            templateurl:'components/home/baby/baby.html',
            controller:'babyCtrl',
            css:['components/home/baby/baby.css','components/home/home.css']


        })
})
    .controller('babyCtrl',['$scope',function($scope){

    }])