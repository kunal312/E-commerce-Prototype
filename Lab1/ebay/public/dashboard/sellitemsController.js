
dashboard.controller("sellitemsController", function($scope,$http)


{

		console.log("Selling Items")

		$scope.sellItem = function(itemName,itemDescription,itemPrice,sellerName,itemqty,sellerlocation)
		{


		$scope.itemName = itemName;	
		console.log("ItemName: " + $scope.itemName);
		$scope.itemDescription = itemDescription;	
		$scope.itemPrice = itemPrice;		
		$scope.sellerName = sellerName;		
		$scope.itemqty = itemqty;		
		$scope.sellerlocation = sellerlocation;
		console.log("sellerlocation: " + $scope.sellerlocation);

		$http({

				method : "POST",
				url: '/sellItems',
				data: {
						"itemName": $scope.itemName,
						"itemDescription": $scope.itemDescription,
						"itemPrice": $scope.itemPrice,
						"sellerName": $scope.sellerName,
						"itemqty": $scope.itemqty,
						"sellerlocation": $scope.sellerlocation
						

					}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("items stored");
								$scope.status = true;
								$scope.msg = "Item Listed";
								

							}

							else if(data.statusCode==401)
								{
								console.log(data.statusCode);
								console.log("Items Listed");
								$scope.status = true;
								$scope.msg = "Item Cannot be Listed";

			
								}
					
							
							
					})				






		}

		
							
})