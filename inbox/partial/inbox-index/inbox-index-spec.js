describe('InboxIndexCtrl', function() {

    beforeEach(module('sieveTest'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller, request) {
      scope = $rootScope.$new();
      ctrl = $controller('InboxIndexCtrl', {$scope: scope, emails: request.getEmails()});
    }));	

	it('should make the magic happens', inject(function() {

		expect(1).toEqual(1); //nothing to test =(
		
	}));

});