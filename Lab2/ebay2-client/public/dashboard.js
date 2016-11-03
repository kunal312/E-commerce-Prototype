var dashboard =  angular.module('dashboard',['ui.router','ngMessages']);

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
		//params : { useremail : null},
		templateUrl:'/login/successLogin.ejs',
		controller : 'successLoginController',
        resolve: {
         data: function ($http) {
             return $http.post("/showItems")
                     .then(function (response) {
                        
                         return response.data;
                        
                     });
         }


     }
	
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
        templateUrl: 'dashboard/bid.html',
        controller : 'biditemsController',            
       resolve: {
         data: function ($http) {
             return $http.post("/showbidItems")
                     .then(function (response) {
                         return response.data;
                     });
         }


     }


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

    .state('successLogin.checkout', {
        url: '/checkout',
        templateUrl: '/dashboard/checkout.ejs',
        controller: 'checkoutController',
        params: { "newCheckout" : null, "totalprice" :null}

        })



    .state('successLogin.orderhistory', {
        url: '/orderhistory',
        templateUrl: 'dashboard/orderhistory.html',
        controller :'ordercontroller',
        resolve: {
         data: function ($http) {
             return $http.post("/fetchOrders")
                     .then(function (response) {
                         return response.data;
                     });
         }


     }




    })


    

    .state('successLogin.sellinghistory', {
        url: '/sellinghistory',
        templateUrl: 'dashboard/sellinghistory.html',
        controller :'sellinghistorycontroller',
        resolve: {
         data: function ($http) {
             return $http.post("/sellinghistory")
                     .then(function (response) {
                         return response.data;
                     });
         }


     }




    })

.state('successLogin.profile', {
        url: '/profile',
        templateUrl: 'dashboard/profile.html',
        controller: 'profileController',
        resolve: {
         data: function ($http) {
             return $http.post("/updateProfile")
                     .then(function (response) {
                         return response.data;
                     });
         }


     }


    })    

.state('successLogin.logout', {
        url: '/logout',
        //templateUrl: '/login/LoginRegister.ejs',
        controller: 'logoutController'


    })   

})