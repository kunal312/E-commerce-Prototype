dashboard.controller("sellinghistorycontroller", function(data,$scope,$http,$window,$state)
{



		$scope.solditems = data.solditems;
		console.log("orderrs" + $scope.solditems);

		

})