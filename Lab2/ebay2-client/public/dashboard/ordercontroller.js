dashboard.controller("ordercontroller", function(data,$scope,$http,$window,$state)
{
		
		console.log("data" +data);
		
		if(data.statusCode=="405")
			{
				
alert("Request cannot be processed. Please try again after some time");
			
			}

		else{
		$scope.orders = data.orders;
		console.log("orderrs" + $scope.orders);
		}

});