dashboard.controller("viewcartController", function(data,$scope,$http)

{

		
		    $scope.items = data.items;
		    $scope.x=0;
		    $scope.itemqty=1;

		    for(i=0; i<data.items.length-1;i++)
				{

					$scope.x += Number(data.items[i].itemprice);
					
				}		

		 $scope.totalprice = $scope.x;


		 		
			 			$scope.subtotal = Number((data.items[0].itemprice)*$scope.itemqty);

			 	

				




})