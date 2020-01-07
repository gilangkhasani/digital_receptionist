app.controller("portalController", function($scope, $http, $state, $interval){
    
	var qrcode = new QRCode(document.getElementById("qr_codes"), {
		width : 250,
		height : 250
	});
	
	var location = $state.params.location;
	
	$scope.callAtInterval = function() {
        $http.get("http://103.15.226.142/portal/page/api/token_auth.php", {
			params:{
				'location' : location,
			}
		}).success(function(response){
			
			if(response.status == 'ERR'){
				$("#responseMessage").html("Please Refresh This Page");
				$scope.responseMessage = "Please Refresh This Page";
			} else {
				qrcode.makeCode(response.url);
			}
		}).error(function(error){
			console.error(error);
		});
    }

    $interval( function(){ $scope.callAtInterval(); }, 2000);
	
	$http.get("http://103.15.226.142/portal/page/api/token_auth.php", {
		params:{
			'location' : location,
		}
	}).success(function(response){
		
		if(response.status == 'ERR'){
			$("#responseMessage").html("Please Refresh This Page");
			$scope.responseMessage = "Please Refresh This Page";
		} else {
			console.log(response);
			qrcode.makeCode(response.url);
		}
	}).error(function(error){
		console.error(error);
	});

})