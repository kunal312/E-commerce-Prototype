dashboard.controller("successLoginController", function(data,$scope,$http,$state)
{




//$scope.useremail= $stateParams.useremail;

//console.log("UserEmail :" +$scope.useremail); 
$scope.items = data.items;

$scope.addtoCart = function(itemname,description,price,qty,seller,shipfrom,itemid)
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


$http({

				method : "POST",
				url: '/successLogin',
				
				data: {

					}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("session exists ");
								$scope.useremail= data.username;
								$scope.lastlogin = data.lastlogin;
								//$state.go("successLogin.wobid");

							}

							else
							{
					
								console.log("Session Invalid");
								
							}
							
							
					})



})

