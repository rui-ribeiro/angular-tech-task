function InboxDirective() {
    'use strict';

    return {
        restrict: 'EA',
        replace: true,
        scope: true,
        templateUrl: "./src/components/inbox/inbox.html",
        controllerAs: 'inbox',
        controller: function (InboxService) {
            const self = this;

            self.messages = [];

            self.selected = undefined;

            self.goToMessage = function (id, index) {
                self.selected = index;
                InboxService.goToMessage(parseInt(id));
            };

            InboxService.getMessages().then(function (response) {
                self.messages = response.data.collection.items;
            })

        },

        link: function (scope, element, attrs, ctrl) {

        }
    }
}

export {InboxDirective}