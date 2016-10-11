var dashboard =  angular.module('dashboard',['ui.router']);

dashboard.config(function($stateProvider,$urlRouterProvider)

{

	$urlRouterProvider.otherwise('/LoginRegister');

	$stateProvider

	.state('LoginRegister', {
		url:'/LoginRegister',
			templateUrl: '/login/LoginRegister.html',
			controller: 'loginController'
		
	})
	
	.state('successLogin',{
		url:'/successLogin',
		params : { useremail : null},
		templateUrl:'/login/successLogin.ejs',
		controller : 'successLoginController',
	
	})

	
.state('successLogin.wobid', {
        url: '/wobid',
        templateUrl: 'dashboard/wobid.html',
        controller : 'showitemsController',
        resolve: {
         data: function ($http) {
             return $http.post("/showItems")
                     .then(function (response) {
                         return response.data;
                     });
         }


     }

    })

	.state('successLogin.sell', {
        url: '/sell',
        templateUrl: 'dashboard/sell.html',
        controller : 'sellitemsController',



    })


    .state('successLogin.bid', {
        url: '/bid',
        templateUrl: 'dashboard/bid.html'


    })

    .state('successLogin.cart', {
        url: '/cart',
        templateUrl: 'dashboard/cart.html',
        controller: 'viewcartController',
        resolve: {
         data: function ($http) {
             return $http.post("/viewCart")
                     .then(function (response) {
                         return response.data;
                     });
         }


     }


    })

    .state('successLogin.orderhistory', {
        url: '/orderhistory',
        templateUrl: 'dashboard/orderhistory.html'


    })

.state('successLogin.profile', {
        url: '/profile',
        templateUrl: 'dashboard/profile.html'


    })    

.state('successLogin.logout', {
        url: '/logout',
        //templateUrl: '/login/LoginRegister.ejs',
        controller: 'logoutController'


    })   

})