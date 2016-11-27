dashboard.controller("loginController", function($scope,$http,$window,$state)
{

	console.log("Reached login controller");

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

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("login successfull");
								console.log("User Email "+data.useremail);
								console.log("Last Login" +data.lastlogin);
								//$state.go("successLogin", {"useremail" : data.useremail});
								$state.go("successLogin");

							}

							else if(data.statusCode==401)
								{
								console.log(data.statusCode);
								console.log("Bad Login");

								$scope.error1 = true;

								$scope.msg2 = "Oops, that's not a match.";
								}

								else if(data.statusCode==403)
								{
									
									$scope.error1 = true;
									$scope.msg2 = "Email or Password Cannot be blank";

								}
								else if(data.statusCode==402)
									{
									$scope.error1 = true;
									$scope.msg2 = "Oops!Looks like you need to Sign Up First";
									}
								else{
								
									alert("Cannot SignIn.Request Timed Out!!");
								}
							
							
							
					})

				
		}




		$scope.register = function()
		{
			console.log("calling afterRegister");

				email = $scope.inputUsername;
				console.log("Email:" + email);
				console.log("Pwd:" + $scope.inputPassword);


			$http({

					method: "POST",
					url: '/afterRegister',
					data: {
						"inputUsername": $scope.inputUsername,
						"inputPassword": $scope.inputPassword,
						"inputFirstName": $scope.inputFirstName,
						"inputLastName": $scope.inputLastName

					}

				}).success(function(data) {
					
					alert(data.statusCode);
						
					if (data.statusCode == 401) {
						
						$scope.error2 = true;
						$scope.msg = "Email Id is already registered";
					}  else if(data.statusCode == 403) 
					{

						$scope.error2 = true;
						$scope.msg = "Email,Password or First Name Cannot be blank";
					}
					
					else if (data.statusCode == 405){
						
						alert("Cannot Register.Request Timed Out!!");
					}
						else {
						
						$scope.registered = true;
						$scope.msg1="Registered Successfully";
					}

				})
			
			

		}


	
})

