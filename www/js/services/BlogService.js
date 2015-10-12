/**
 * Created by nilo on 09.01.15.
 */
angular.module('blog')
    .service('BlogService', ['$http', function ($http) {
        var blogserver = "http://blog.rocketbase.io";
        console.log('setting url '+blogserver);
        return ({
            allEntries : allEntries,
            findBySlug : findBySlug,
            handleError : handleError,
            handleSuccess : handleSuccess
        });
        function allEntries() {
            var url = blogserver;
            console.log('calling blogservice: '+url);
            var request = $http.get(url);
            return request.then(handleSuccess, handleError);
        };
        function findBySlug(slug) {
            var url = blogserver+'/' + slug;
            console.log('calling blogservice: '+url);
            var request = $http.get(url);
            return request.then(handleSuccess, handleError);
        };

        // default http-get error handler
        function handleError(response) {
            return( response.data );
        };

        // default http-get success handler
        function handleSuccess(response) {
            return( response.data );
        };
    }]);
