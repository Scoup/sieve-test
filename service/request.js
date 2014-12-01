angular.module('sieveTest').factory('request',function($http, $q) {

	var request = {};
    var url = 'resources/emails.json';

    request.stringToDate = function(data) {
        for(var i in data) {
            if(typeof(data[i].data) !== 'undefined') {
                data[i].data = Date.parse(data[i].data);
            }
        }
        return data;
    };

    request.getEmails = function() {
        return $http.get(url).then(function(rqst){
            return request.stringToDate(rqst.data);
        });
    };

	return request;
});