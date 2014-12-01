describe('customDate', function() {

	beforeEach(module('sieveTest'));

	it('should return dd/MM/YYYY date', inject(function($filter) {

        var filter = $filter('customDate');

		expect(filter('2013-04-30T09:25:43.510Z')).toEqual('30/04/2013');

	}));

    it('should return hh:mm for today', inject(function($filter) {

        var filter = $filter('customDate');
        
        var today = new Date();
        var time = $filter('date')(today, 'hh:mm');

        expect(filter(today.getTime())).toEqual(time);

    }));

});