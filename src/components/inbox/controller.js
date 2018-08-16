class InboxController {

    constructor(InboxService) {
        this.InboxService = InboxService;
    }

    $onInit() {
        this.InboxService.getMessage().then(
            response => {
                this.data = {
                    emails: response.data
                }
            },
            response => {
                console.log('There was an error!', response.status);
            }
        )
    }

}

export { InboxController }