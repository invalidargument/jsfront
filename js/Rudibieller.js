define('Rudibieller', ['knockout', 'Communication/Email/ViewModel', 'Config/Config'], function(ko, MailVM) {
    ko.applyBindings(new MailVM());
});