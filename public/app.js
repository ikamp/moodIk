angular
    .module('moodikApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.interceptors.push('MyHttpInterceptor');
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/login', {
                templateUrl: 'template/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'template/singup.html',
                controller: 'SignUpController'
            })
            .when('/verify', {
                templateUrl: 'template/verify.html',
                controller: 'VerifyController'
            })
            .when('/employee/:id', {
                templateUrl: 'template/employee.html',
                controller: 'EmployeeController'
            })
            .when('/dashboard/:id', {
                templateUrl: 'template/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/mymood/:id', {
                templateUrl: 'template/mymood.html',
                controller: 'MyMoodController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    })
    .run(function(AuthService) {
        AuthService.init();
    });