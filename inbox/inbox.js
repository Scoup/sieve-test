angular.module('inbox', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('inbox').config(function($stateProvider) {
    /* Add New States Above */
    $stateProvider.state('inbox-index', {
        url: '/inbox',
        templateUrl: 'inbox/partial/inbox-index/inbox-index.html',
        controller: 'InboxIndexCtrl',
        resolve: {
            emails: function(request) {
                var req = request.getEmails()
                    .then(function(data, error){
                        return data.data;
                    });
                // return req;
                return request.getEmails();
            }
        }
    });
});

