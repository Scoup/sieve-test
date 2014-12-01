describe('emailWidget', function() {

    beforeEach(module('sieveTest'));
    beforeEach(module('directive/email-widget/email-widget.html'));
    beforeEach(module('directive/email-widget/email-widget-pagination.html'));

    var scope,compile,sniffer;

    var emails = [
        {
            'nome': 'A',
            'assunto': 'Z',
            'data': '2014-01-01T10:00:00.510Z'
        },
        {
            'nome': 'B',
            'assunto': 'T',
            'data': '2014-01-01T10:00:05.510Z'
        },
        {
            'nome': 'C',
            'assunto': 'S',
            'data': '2014-01-01T10:00:02.510Z'
        },
        {
            'nome': 'D',
            'assunto': 'M',
            'data': '2014-01-01T10:00:08.510Z'
        },
        {
            'nome': 'E',
            'assunto': 'G',
            'data': '2014-01-01T10:00:07.510Z'
        },
        {
            'nome': 'F',
            'assunto': 'A',
            'data': '2014-01-01T10:00:03.510Z'
        }
    ];

    var element = '<email-widget emails="emails"></email-widget>';
    
    beforeEach(inject(function($rootScope,$compile, $sniffer) {
        scope = $rootScope.$new();
        compile = $compile;
        sniffer = $sniffer;
        
        scope.emails = emails;
    }));

    function createWidget() {
        element = compile(element)(scope);
        scope.$digest();
        return element;
    }

    function getFirstName(el) {
        return el.find('table tbody tr:eq(0) td:eq(0)').text();
    }

    it('should start with desc order', function() {
        var el = createWidget();
        var firstName = getFirstName(el);
        expect(firstName).toBe('D');
    });

    it('should change order onClick', function(){
        var el = createWidget();
        el.find('table thead a:contains("Nome")').click();
        var firstName = getFirstName(el);
        expect(firstName).toBe('A');
    });

    it('should filter elements', function(){
        var el = createWidget();

        //search A in input
        var input = el.find('#inboxEmailWidget');
        input.val('A');
        input.trigger(sniffer.hasEvent('input') ? 'input' : 'change');
        scope.$digest();

        var firstName = getFirstName(el);
        expect(firstName).toBe('A');
        var c = el.find('table tbody tr');
        expect(c.length).toEqual(2);
    });
});