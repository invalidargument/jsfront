define(['knockout'], function(ko) {
    return function CommunicationEmailViewModel() {
        this.name = ko.observable('');
        this.email = ko.observable('');
        this.message = ko.observable('');
        this.sendForm = function() {
            var data = {
                name: this.name(),
                email: this.email(),
                message: this.message()
            };
            $.post(
                Config.uri.Communication.Email,
                JSON.stringify(data),
                $.proxy(function(response) {
                    this.name('');
                    this.email('');
                    this.message('');
                }, this)
            ).done(function(e) {
                console.log('done', e);
            }).fail(function(e) {
                var el = $('.modal-footer .error-hidden');
                el.text(Config.messages.error.standard).addClass('error-visible');
            });
        };
    }; 
});