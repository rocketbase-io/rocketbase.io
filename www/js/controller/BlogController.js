/**
 * Created by nilo on 09.01.15.
 */
angular.module('blog')
    .controller('BlogController',[ '$scope', 'BlogService', function($scope,BlogService) {
        BlogService.allEntries().then(function(result) {
            console.log('found entries '+result);
            $scope.entries = result;
            $scope.$root.title = $scope.$root.defaultTitle;
            $scope.$root.description = $scope.$root.defaultDescription;
        });
    }])


;