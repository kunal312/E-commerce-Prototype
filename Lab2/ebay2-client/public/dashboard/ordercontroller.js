dashboard.controller("ordercontroller", function(data,$scope,$http,$window,$state)
{



		$scope.orders = data.orders;
		console.log("orderrs" + $scope.orders);

		

})