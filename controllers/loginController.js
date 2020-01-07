app.controller("LoginController", function($scope, $http, $state){
    
    //Variables
    $scope.signUpInfo = {
        username: undefined,
        password: undefined
    }
    
    $scope.loginInfo = {
        username: undefined,
        password: undefined
    }
    
    var result = {
        test: undefined
    }
    
    result.test = {
        test: "test",
        test2: "test2",
        test3: "testers"
    }
    
    result.test = JSON.stringify(result.test);
    
    //Functions
    $scope.loginUser = function () {
         var data = {
            username: $scope.loginInfo.username,
            password: $scope.loginInfo.password
        }
		
        $http.post("endpoints/login.php", data).success(function(response){
            localStorage.setItem("token", JSON.stringify(response.token));
            localStorage.setItem("user_login", JSON.stringify(response.result));
			if(response == 'ERROR'){
				$scope.responseMessage = "Username or Password is incorrect";
			} else {
				console.log(response);
				$scope.responseMessage = "Successfully Logged In";
				//localStorage.setItem("username", JSON.stringify($scope.loginInfo.username));
				$state.go("application", result);
			}
        }).error(function(error){
            console.error(error);
        });
    
    }
    
    //Init

})