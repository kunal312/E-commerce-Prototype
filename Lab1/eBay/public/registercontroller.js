var myApp1 = angular.module('myApp1' ,[]);


myApp1.controller("registercontroller" , function($scope, $http)

{


$scope.register = function()
		{
			console.log("calling afterRegister");

				email = $scope.inputUsername;
				console.log("Email:" + email);

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
						
						alert("email taken");
						$scope.error = "Email already taken";
					} else {
						
						$scope.msg="Registered Successfully";
					}

				})
			
			

		}

	

})