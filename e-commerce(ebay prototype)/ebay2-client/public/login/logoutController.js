dashboard.controller("logoutController", function($scope,$http,$window,$state)


{

$http({

				method : "POST",
				url: '/logout',
				data: {


					}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("user logged out");
								$state.go("LoginRegister");


							}

							else
							{
								console.log(data.statusCode);
								console.log("Session cannot be destroyed");
							}
							
							
					})



})