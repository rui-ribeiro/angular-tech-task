import EmailService from './service.js'

let Email;

const promisedData = require('../../db/email-1.json');
describe('EmailService', function () {

    beforeEach(function () {
        Email = EmailService;
    });

    it('should exist', () => {
        expect(Email).toBeDefined();
    });

    describe('.getMessage()', () => {

        it('should exist', () => {
            expect(new EmailService().getMessage).toBeDefined();
        });

        it('require id', () => {
            expect(
                function () {
                    new EmailService().getMessage()
                }
            ).toThrow("Please provide email id.");
        });

        it('return email', (done) => {
            spyOn(EmailService.prototype, 'getMessage').and.returnValue(Promise.resolve(promisedData));
            new EmailService().getMessage({ id: 1 })
                .then((result) => {
                    expect(result).toEqual(promisedData);
                });
        })

    });

});

