angular.module('blog', ['ngRoute','ngSanitize','ngDisqus','angulartics', 'angulartics.google.analytics'])
    .config(function ($routeProvider, $locationProvider, $disqusProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/allentries.html',
                controller: 'BlogController'
            })
            .when('/:slug', {
                templateUrl: 'views/entry.html',
                controller: 'BlogEntryController'
            })
            .otherwise({
                redirectTo: '/'
            });
            //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $disqusProvider.setShortname('rocketbase');
    })
    .run(function($rootScope) {
        $rootScope.defaultTitle = 'blog - aktuelle Informationen rund um rocketbase.io';
        $rootScope.title = $rootScope.defaultTitle;

        $rootScope.defaultDescription = 'Blog mit allen Aktivitäten rund um rocketbase.io';
        $rootScope.description = $rootScope.defaultDescription;
    })

;

