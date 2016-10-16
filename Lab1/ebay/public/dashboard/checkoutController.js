dashboard.controller("checkoutController", function($scope,$http,$state,$stateParams)


{
		$scope.totalstring="Total"
		$scope.totalprice = $stateParams.totalprice;
		console.log("Total Price in Checkout" +$scope.totalprice);

		console.log("Verifying Payment");

		$scope.makePayment = function(card,expiry,cvv)	

		{

				$scope.card = card;
				console.log("Card: " +card);
				$scope.expiry=expiry;
				console.log("Expiry:" + expiry);
				$scope.cvv=cvv;
				console.log("CVV:" +cvv);



				$http({

				method : "POST",
				url: '/paymentValidate',
				data: {
						
						"card": $scope.card,
						"expiry": $scope.expiry,
						"cvv": $scope.cvv
				
				}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==200)
							{
								console.log("Card Number Verified");
								console.log("updating tables");
								$scope.updateTables();
								$scope.failure=false;
							
								

							}


						else {

							console.log("Invalid Card Number");
								$scope.failure=true;
								$scope.msg1 ="Please enter Valid Card Number";
						
							}
					
					 })
 


			
		









		}		





			$scope.updateTables = function()
			{
			$scope.itemstobuy =$stateParams.newCheckout;
			console.log("itemstobuy: " +$scope.itemstobuy);
			console.log("$scope.items");


				$http({

				method : "POST",
				url: '/checkout',
				data: {
						
						"itemstobuy": $scope.itemstobuy
				
				}

				}).success(function(data)
					{

						console.log("Status Code " + data.statusCode);
						if(data.statusCode==401)
							{
								
								
				
								console.log("Quantity unavailable for one or more item(s)");
								$scope.failure=true;
								$scope.msg1 ="Please enter Valid Card Number";
								

							}


						else {

								$scope.failure=false;
								console.log("After checking out");
								$scope.success=true;
								$scope.msg ="Order Successfull";
								$scope.paymenthide = true;
								$scope.continuebtn=true;
						
							}
					
					 })
 
		}










})
