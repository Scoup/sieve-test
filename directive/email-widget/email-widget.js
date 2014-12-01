angular.module('sieveTest').directive('emailWidget', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            emails: '='
		},
		templateUrl: 'directive/email-widget/email-widget.html',
		link: function(scope, element, attrs, fn) {
            scope.config = {
                currentPage: 1,
                pageSize: 10,
                reverse: true,
                emailSearch: '',
                emailOrder: 'data'
            };

            scope.changeOrder = function(order) {
                if(order !== scope.config.emailOrder) {
                    scope.config.reverse = false;
                } else {
                    scope.config.reverse = !scope.config.reverse;
                }
                scope.config.emailOrder = order;
            };

            scope.$watch('emailSearch', function(newValue){
                scope.config.currentPage = 1;
            });
		}
	};
});