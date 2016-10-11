dashboard.controller("successLoginController", function($scope,$http,$state,$stateParams)
{



//$scope.useremail= $stateParams.useremail;

//console.log("UserEmail :" +$scope.useremail); 


$http({

				method : "POST",
				url: '/successLogin',
				
				data: {

					}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("session exists ");
								$scope.useremail= data.username;
								$state.go("successLogin.wobid");

							}

							else
							{
					
								console.log("Session Invalid");
								
							}
							
							
					})



})

