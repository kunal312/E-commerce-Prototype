
dashboard.controller("sellitemsController", function($scope,$http)


{

		

		$scope.sellItem = function(itemName,itemDescription,itemPrice,sellerName,itemqty,sellerlocation)
		{

		console.log("Selling Items")
		$scope.itemName = itemName;	
		console.log("ItemName: " + $scope.itemName);
		$scope.itemDescription = itemDescription;	
		$scope.itemPrice = itemPrice;		
		$scope.sellerName = sellerName;		
		$scope.itemqty = itemqty;		
		$scope.sellerlocation = sellerlocation;
		console.log("sellerlocation: " + $scope.sellerlocation);

	if( !isNaN(itemqty) &&itemqty>=1 &&itemName!==undefined && itemDescription!==undefined && itemPrice!==undefined && sellerName!==undefined && itemqty!==undefined  && sellerlocation!==undefined)

		{

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
							else if(data.statusCode==405){
								
								alert("Cannot Submit Item Details. Request Timed Out!");
								}

					
							
							
					})				




					}
					
					else {

				if(itemName==undefined || itemDescription==undefined || itemPrice==undefined || sellerName==undefined || itemqty==undefined  || sellerlocation==undefined)

						{
							alert("Please fill all the details");
						}

				

				    else if(isNaN(itemqty))
				    {
				    	alert("Please enter Numeric Value for Quantity");
				    }

				    else if(itemqty<1)
				    {
				    	alert("Quantity should be atleast 1");
				    }
			
			
				
				}


		}

		$scope.bidItem = function(itemName,itemDescription,itemPrice,sellerName,itemqty,sellerlocation)
		{

		console.log("Bidding Items")
		$scope.itemName = itemName;	
		console.log("ItemName: " + $scope.itemName);
		$scope.itemDescription = itemDescription;	
		$scope.itemPrice = itemPrice;		
		$scope.sellerName = sellerName;		
		$scope.itemqty = itemqty;		
		$scope.sellerlocation = sellerlocation;
		console.log("sellerlocation: " + $scope.sellerlocation);

		if(!isNaN(itemqty) && itemqty==1 && itemName!==undefined && itemDescription!==undefined && itemPrice!==undefined && sellerName!==undefined && itemqty!==undefined  && sellerlocation!==undefined)

		{

		$http({

				method : "POST",
				url: '/bidItems',
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
								$scope.msg = "Item Listed for Auction";
								

							}

							else if(data.statusCode==401)
								{
								console.log(data.statusCode);
								$scope.status = true;
								$scope.msg = "Item Cannot be Listed for Auction";

			
								}
							else if(data.statusCode==405){
								
								alert("Cannot Submit Item Details. Request Timed Out!");
								}

					
							
							
					})				


			}

			else {

				if(itemName==undefined || itemDescription==undefined || itemPrice==undefined || sellerName==undefined || itemqty==undefined  || sellerlocation==undefined)

						{
							alert("Please fill all the details");
						}

				

				    else if(isNaN(itemqty))
				    {
				    	alert("Please enter Numeric Value for Quantity");
				    }
				    else if(itemqty!==1)
				
					{
					alert("Quantity should be 1 for Auction Item");
				    }
			
				}




		}

		
							
})


