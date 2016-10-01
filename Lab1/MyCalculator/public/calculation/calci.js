var myApp = angular.module('myApp' ,[]);

myApp.controller("Calculator" , function($scope, $http)

{
		$scope.output = 0;

		$scope.total=0;

		$scope.operator = null;

		$scope.previousValue = null;

		$scope.newInput = true;


		$scope.updateOutput = function(input)
		{

			if($scope.output == 0 || $scope.newInput)
			{
				$scope.output = input;
				$scope.newInput = false;
			}

			else if($scope.output!=0 && input==".")
			{
				$scope.output += String(input);
			}
			else if(input !=".")
			{
				$scope.output += String(input);
			}
			$scope.previousValue = parseFloat($scope.output);
			$scope.countAdd =1;
			$scope.countSubtract=1;
			

		}


	$scope.add = function()
		{

		if($scope.previousValue)	
		{
			if($scope.total && $scope.operator == "+")
		
			{

			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "-")
			{
			
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "*")
			{

			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "/")
			{
				
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else 
					
			{
						
				$scope.total = $scope.previousValue;

		 	}
		}

		else if($scope.previousValue == 0 && $scope.operator=="/")
			{

					
					$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
				
			}

	      $scope.newInput = true;
	      $scope.operator = "+";
	      $scope.output = $scope.total;
	      $scope.previousValue = 0;

		}

		$scope.subtract = function()
		{

		if($scope.previousValue)	
		{
			if($scope.total && $scope.operator == "+")
		
			{
		
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "-")
			{
		
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "*")
			{
			
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "/")
			{
				
				
				$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
				
			} 
			
			else 
					
			{
						
				$scope.total = $scope.previousValue;

		 	}
		}
		else if($scope.previousValue == 0 && $scope.operator=="/")
			{
					$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
					
			}

	      $scope.newInput = true;
	      $scope.operator = "-";
	      $scope.output = $scope.total;
	      $scope.previousValue = 0;

		}


		$scope.multiply =function()
		{

			if($scope.previousValue)	
		{
			if($scope.total && $scope.operator == "+")
		
			{
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "-")
			{
				$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "*")
			{
				$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "/")
			{
					$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
				
		
			} 
			else 
					{
						
						$scope.total = $scope.previousValue;

		 			}
		}
			
		

		else if($scope.previousValue == 0 && $scope.operator=="/")
			{
			
			$scope.calculations($scope.total,$scope.previousValue,$scope.operator);

					
			}
			

	      $scope.newInput = true;
	      $scope.operator = "*";
	      $scope.output = $scope.total;
	      $scope.previousValue = 0;



		}


		$scope.division = function()
		{

			{

			if($scope.previousValue)	
			{
			if($scope.total && $scope.operator == "+")
		
			{
				$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "-")
			{
				$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "*")
			{
				$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else if($scope.total && $scope.operator == "/")
			{
				
				
					$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
		
			} 
			else 
				{

				$scope.total = $scope.previousValue;
				
				}
		}

		else if($scope.previousValue == 0 && $scope.operator=="/")
			{

					$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
					
			}
			

	      $scope.newInput = true;
	      $scope.operator = "/";
	      $scope.output = $scope.total;
	      $scope.previousValue = 0;




		}}

		$scope.evaluate = function()
		{

				if($scope.operator != null)
				{
					$scope.calculations($scope.total,$scope.previousValue,$scope.operator);
					$scope.previousValue=0;
					$scope.operator = null;
					$scope.newInput =true;
				}

				else 
				{
				$scope.total =$scope.previousValue;
				$scope.output = $scope.total;
				}			
		}


		$scope.backone = function()
		{
			$scope.output = 0;
			$scope.previousValue = 0;

			
			
		}

		$scope.deleteALL = function()
		{

			$scope.output = 0;
			$scope.total = 0;
			$scope.previousValue = 0;
			$scope.newInput = true;
			$scope.operator = null;

		}
		
		$scope.calculations = function(total,previousValue,operator){
			
			$http({
				method: "POST",
				url: '/calculationroutes',
				data: {
					"total": total,
					"previousValue": previousValue,
					"operator": operator
				}

			}).success(function(data) {
				
				$scope.total = data.result;
				$scope.output = $scope.total;
				

			})
			
			
			
		}




})