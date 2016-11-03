dashboard.controller("showitemsController", function(data,$scope,$http,$window,$state)


{

		$scope.items = data.items;


		console.log("ItemList:" +$scope.items);



		$scope.addtoCart = function(itemname,itemdescription,itemprice,itemremqty,sellername,sellerlocation,itemid)
		{
			
			$scope.itemname = itemname;	
			console.log("ItemName: " + $scope.itemname);
			$scope.itemdescription = itemdescription;	
			$scope.itemprice = itemprice;		
			$scope.sellerlocation = sellerlocation;		
			$scope.itemremqty = itemremqty;		
			$scope.sellername = sellername;
			console.log("sellerlocation: " + $scope.sellername);



				

				$http({

				method : "POST",
				url: '/addtoCart',
				data: {
					"itemname": $scope.itemname,
					"itemdescription": $scope.itemdescription,
					"itemprice": $scope.itemprice,
					"sellername": $scope.sellername,
					"itemremqty": $scope.itemremqty,
					"sellerlocation": $scope.sellerlocation,
					"itemid" : itemid

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