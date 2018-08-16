export default class EmailService {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getMessage(params = {}) {
        if (params.id === undefined) {
            throw "Please provide email id.";
        }
        const deferred = this.$q.defer();
        this.$http.get('./src/db/email-' + params.id + '.json').then(
            function (response) {
                deferred.resolve(response.data)
            },
            function (response) {
                deferred.resolve(response)
            });
        return deferred.promise;

    };

}

EmailService.$inject = ['$http', '$q'];
