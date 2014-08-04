define(['knockout', 'Communication/Email/ViewModel', 'Config/Config'], function(ko, MailVM) {
    ko.applyBindings(new MailVM());
    var foo = function () {
        console.log('Here we go.');
    }();
});