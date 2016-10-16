dashboard.controller("viewcartController", function(data,$scope,$http,$state)

{

		
		    $scope.items = data.items;
		    $scope.totalstring = "Total";
		    $scope.totalprice=0;

		    $scope.x=0;
		    $scope.itemqty=1;

		    //For Calculating Total when page loads
 if(data.statusCode!==401)
{
		    for(i=0; i<data.items.length;i++)
				{

					$scope.x += Number(data.items[i].itemprice);
					console.log($scope.x);
					
				}	
				 $scope.totalprice = $scope.x;	
			

		

// For Calculating total when quantity changes
		 

			$scope.newCheckout =[];


			for(var i=0; i<data.items.length;i++)
			{
			var newItem ={}
			newItem.itemid= data.items[i].itemid;
			newItem.itemqty = 1;
			newItem.emailid= data.items[i].emailid;
			newItem.itemname=data.items[i].itemname;
			newItem.itemprice=data.items[i].itemprice;
			$scope.newCheckout.push(newItem);
			}

			console.log("Checkout Array:" + $scope.newCheckout);
					 
					 
			$scope.updateTotal = function(selectedqty,itemprice,itemid)
					 

			    {
						
						for	 (var i=0; i<$scope.newCheckout.length;i++)
						{
								if(itemid===$scope.newCheckout[i].itemid)
								{
										if(selectedqty>$scope.newCheckout[i].itemqty)
										{
											newqty= selectedqty - $scope.newCheckout[i].itemqty;
											$scope.totalprice += Number(($scope.newCheckout[i].itemprice)*newqty);
										}

										else
										{
											newqty= $scope.newCheckout[i].itemqty - selectedqty;
											$scope.totalprice -= Number(($scope.newCheckout[i].itemprice)*newqty);

										}

									$scope.newCheckout[i].itemqty=selectedqty;


								}


						}


				}
}



		 // For Removing Items from Cart

		 $scope.removeitem = function(itemid)
		 {

		 		console.log("Item to delete:"+itemid)

		 		
				$http({

				method : "POST",
				url: '/removefromCart',
				data: {
						
						"itemid": itemid
				
				}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("Item Removed from Cart");
								$state.reload();
								

							}
					
					 })
			}

			//For Checkout
			
$scope.checkout = function()
			{


	$state.go("successLogin.checkout",{"newCheckout" : $scope.newCheckout, "totalprice" :$scope.totalprice });
			}



})
