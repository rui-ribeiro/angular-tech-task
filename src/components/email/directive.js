function EmailDirective() {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: "./src/components/email/email.html",
        controllerAs: 'email',
        controller: function ($stateParams, $scope, EmailService) {
            const self = this;

            self.message = {};
            self.reply = function (message) {
                EmailService.reply(message);
            };

            self.showAsHTML = true;

            EmailService.getMessage($stateParams).then(response => {
                EmailService.message = response;
                self.message = EmailService.message;

            });
        }
    }
}

export {EmailDirective}