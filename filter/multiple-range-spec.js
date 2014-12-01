describe('multipleRange', function() {

	beforeEach(module('sieveTest'));

	it('should accept range without multiplier', inject(function($filter) {

        var filter = $filter('multipleRange');
        expect(filter([],5,10)).toEqual([5,6,7,8,9,10]);
	}));

    it('should accept range with multiplier', inject(function($filter) {
        var filter = $filter('multipleRange');
        expect(filter([],5,20,5)).toEqual([5,10,15,20]);
    }));

});