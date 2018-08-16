export default class InboxService {

    constructor($http, $state) {
        this.$http = $http;
        this.$state = $state;
    }

    goToMessage(id) {
        if (id === undefined || Number.isInteger(id) === false) {
            throw "Please provide a valid id.";
        }
        this.$state.go('email', {id: id});
    };

    getMessages() {
        return this.$http.get('./src/db/emails.json')
    };
}

InboxService.$inject = ['$http', '$state'];

