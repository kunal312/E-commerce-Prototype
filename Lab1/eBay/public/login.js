var myApp = angular.module('myApp' ,["ngRoute"]);


myApp.controller("logRegister" , function($scope, $http)

{


$scope.signin = function()
		{

			console.log("Reached to get sign in page..Calling /sign in");
			
			window.location.assign("/signin");
			
			

		}



$scope.register = function()
		{

			console.log("Reached to register page..Calling /register");
			
			window.location.assign("/register");
			
			

		}		

})