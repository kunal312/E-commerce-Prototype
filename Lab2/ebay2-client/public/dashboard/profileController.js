dashboard.controller("profileController", function(data,$scope,$http,$window,$state)


{

		


		$scope.profile = data.profile;
		console.log("Profile: "+$scope.profile);

		$scope.firstname = $scope.profile.firstname;
		$scope.lastname= $scope.profile.lastname;
		$scope.userid=$scope.profile.userid;
		$scope.contact = $scope.profile.contact;
		$scope.bday = $scope.profile.birthdate;
		$scope.location = $scope.profile.location;



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
							else if(data.statusCode==405){
							
							alert("Cannot Update Profile. Request Timed Out!");
							}

							else 
								{
								
								alert("No Changes Made to Profile")

			
								}
					
							
							
					})	

					}	
	
















});