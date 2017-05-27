angular.module('homeModule',['womenModule','shoeModule','babyModule'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home/new');
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller:'homeCtrl',
                css:'components/home/home.css'
            })

    })
    .controller('homeCtrl',['$scope',function($scope){

    }])