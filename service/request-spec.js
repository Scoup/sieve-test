describe('request', function() {

  beforeEach(module('sieveTest'));

  var emails = [
    {
        data: "2013-04-30T09:25:43.510Z"
    }
  ]

  it('should convert string date to object date', inject(function(request) {
    var output = request.stringToDate(emails);
    var str = emails[0].data;

    expect(output[0].data).toEqual(str);
  }));

});