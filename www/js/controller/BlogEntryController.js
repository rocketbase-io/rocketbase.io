/**
 * Created by nilo on 09.01.15.
 */
angular.module('blog')
    .controller('BlogEntryController',[ '$scope', '$routeParams', 'BlogService', function($scope,$routeParams,BlogService) {
        BlogService.findBySlug($routeParams.slug).then(function(result) {
            $scope.entry = result;
            $scope.slug = function() {
                return $scope.entry.slug;
            }
            $scope.$root.title = 'rocketbase.io Blog - '+ $scope.entry.longTitle;
            $scope.$root.description = $scope.entry.teaser;
        });
    }])
    .directive('tableOfContents', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function ($scope, elm, attrs, ngModel) {
                function updateHeadlines() {
                    $scope.headlines = [];
                    console.log("starting to look for all headlines in "+elm[0]);
                    angular.forEach(elm[0].querySelectorAll('h1,h2,h3,h4,h5,h6'), function (e) {
                        console.log("found element");
                        $scope.headlines.push({
                            level: e.tagName[1],
                            label: angular.element(e).text(),
                            element: e
                        });
                    });
                }

                // avoid memoryleaks from dom references
                $scope.$on('$destroy', function () {
                    $scope.headlines = [];
                });
                // scroll to one of the headlines
                $scope.scrollTo = function (headline) {
                    headline.element.scrollIntoView();
                }
                // when the html updates whe update the headlines
                ngModel.$render = updateHeadlines;
                updateHeadlines();
                console.log("created toc");
            }
        }
    })


;