dashboard.controller("showitemsController", function(data,$scope,$http,$window,$state)


{

		$scope.items = data.items;


		console.log("ItemList:" +$scope.items);



		$scope.addtoCart = function(itemname,description,price,qty,seller,shipfrom)
		{

				
			
		$scope.itemName = itemname;	
		console.log("ItemName: " + $scope.itemName);
		$scope.itemDescription = description;	
		$scope.itemPrice = price;		
		$scope.sellerName = seller;		
		$scope.itemqty = qty;		
		$scope.sellerlocation = shipfrom;
		console.log("sellerlocation: " + $scope.sellerlocation);

				

				$http({

				method : "POST",
				url: '/addtoCart',
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
								console.log("items added to cart");
								alert("Item added to Cart");
								

							}

							else if(data.statusCode==401)
								{
								console.log(data.statusCode);
								alert("Item already present in the Cart");

			
								}
					
							
							
					})				





		}

		
							
})