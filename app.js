var app = angular.module("guestbook_portal", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
	
	// function to check the authentication //
    var Auth = ["$q", "authService", function ($q, authService) {
        authService.fillAuthData;
        if (authService.authentication.isAuth) {
            return $q.when(authService.authentication);
        } else {
            return $q.reject({ authenticated: false });
        }
    }];
	
	$stateProvider
        .state("portal", {
			url:"/portal/{location}",
			controller: "portalController",
			templateUrl: "views/portal.html",
			params: {'location': "{location}"}
        })
        .state("portal2", {
			url:"/portal2/{location}",
			controller: "portalController",
			templateUrl: "views/portal2.html",
			params: {'location': "{location}"}
        })
		
		// errors //
		.state('not-found', {
			url: '/page-not-found',
			templateUrl: '/view/error_404.html'
		})
});
