dashboard.controller("profileController", function(data,$scope,$http,$window,$state)


{

		


		$scope.profile = data.profile;
		console.log("Profile: "+$scope.profile);

		$scope.firstname = $scope.profile[0].firstname;
		$scope.lastname= $scope.profile[0].lastname;
		$scope.userid=$scope.profile[0].username;
		$scope.contact = $scope.profile[0].phone;
		$scope.bday = $scope.profile[0].birthdate;
		$scope.location = $scope.profile[0].location;



		$scope.updateProfile = function(firstname,lastname,userid,bday,contact,location)

		{

		$http({

				method : "POST",
				url: '/profilechanges',
				data: {
						"firstname": firstname,
						"lastname": lastname,
						"userid": userid,
						"contact": contact,
						"bday": bday,
						"location": location
						

					}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("Profile Updated");
								alert("Profile updated")
								

							}

							else 
								{
								
								alert("Profile cannot be updated")

			
								}
					
							
							
					})	

					}	
	
















});