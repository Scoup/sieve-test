angular.module('sieveTest').filter('multipleRange', function() {
	return function(input,min,max,step) {
        step = step || 1;
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
	};
});