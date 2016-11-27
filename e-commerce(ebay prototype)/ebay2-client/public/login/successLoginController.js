dashboard.controller("successLoginController", function(data,$scope,$http,$state)
{

	console.log(data);

if(data.statusCode==405){
	
	alert("Request Timed Out for fetching the items. Please try again later!");
}

//$scope.useremail= $stateParams.useremail;

//console.log("UserEmail :" +$scope.useremail); 
$scope.items = data.items;

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
							

							}

							else
							{
					
								console.log("Session Invalid");
								
							}
							
							
					})



})

