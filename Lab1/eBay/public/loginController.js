var login  = angular.module('login'  ,[]);



login.controller("loginController", function($scope,$http)
{


		$scope.login = function()
		{


			$http({

				method : "POST",
				url: '/afterSignin',
				data: {
						"inputUsername": $scope.inputUsername,
						"inputPassword": $scope.inputPassword

					}

				}).success(function(data)
					{

							if(data.statusCode==401)
							{
								$scope.msg = "Invalid Username or Password";
							}

							else
							{
								console.log(data.statusCode);
								console.log("login successfull");
								
								
							}





					})

				





		}






	
})

