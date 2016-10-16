
dashboard.controller("biditemsController", function(data,$scope,$http,$window,$state)
{



		$scope.biditems = data.biditems;
		console.log("bid items:" + $scope.biditems);

		


		$scope.bidforItem = function(itemid,bidprice)
		{

			console.log("Bid Price:" + bidprice);
			console.log("Itemid:"+itemid);

			console.log("Submitting Bid");

			if(bidprice!=undefined && bidprice>0)
			{
				$http({

				method : "POST",
				url: '/bidupdate',
				data: {
						
						"itemid": itemid,
						"bidprice":bidprice
					
						

					}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log(" Bid Placed");
								alert("Bid Placed");
								

							}

							else 
								{
								console.log("Bid Cannot be Placed");
								alert("Bid Cannot be Placed");

			
								}
					
							
							
					})				


			}

			else{
				alert("Bid Price cannot be less than Base Price or undefined");
			}




		}










})