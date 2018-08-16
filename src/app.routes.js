export default function config($stateProvider, $urlRouterProvider, $locationProvider) {
    // TODO: Add server configuration
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('inbox', {
            url: '/inbox',
            templateUrl: './src/components/inbox/index.html',
            controller: 'InboxCtrl',
        })
        .state('email', {
            url: '/email/:id',
            templateUrl: './src/components/email/index.html'
        })
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];