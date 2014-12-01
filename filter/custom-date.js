angular.module('sieveTest').filter('customDate', function($filter) {
	return function(input,arg) {
        var today = $filter('date')(new Date(), 'dd/MM/yyyy');
        var date = $filter('date')(input, 'dd/MM/yyyy');

        if(date !== today) {
            return date;
        } else {
            return $filter('date')(input, 'hh:mm');
        }
	};
});