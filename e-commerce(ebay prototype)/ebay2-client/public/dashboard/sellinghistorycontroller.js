dashboard.controller("sellinghistorycontroller", function(data,$scope,$http,$window,$state)
{


	
		if(data.statusCode==405){
		
		alert("Cannot Make Payment. Request Timed Out!");
		}

		else{
			
		
		$scope.solditems = data.solditems;
		console.log("orderrs" + $scope.solditems);
		}
		

});