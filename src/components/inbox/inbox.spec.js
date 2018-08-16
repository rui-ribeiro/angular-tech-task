import InboxService from './inboxServices.js'

let Inbox;

describe('InboxService', function () {

    beforeEach(function () {
        Inbox = InboxService;
    });

    it('should exist', () => {
        expect(Inbox).toBeDefined();
    });

    describe('.getMessages()', () => {

        it('should exist', () => {
            expect(new Inbox().getMessages).toBeDefined();
        });
    });

    describe('.goToMessage()', () => {

        it('should exist', () => {
            expect(new Inbox().goToMessage).toBeDefined();
        });

        it('require id', () => {
            expect(
                function () {
                    new Inbox().goToMessage()
                }
            ).toThrow("Please provide a valid id.");
        });

    });


});

