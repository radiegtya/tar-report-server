Meteor.publishComposite('account', function (selector, options) {
    console.log("subscribing some Account");
    var selector = selector || {};
    var options = options || {};
    return{
        find: function () {
            return Account.find(selector, options);
        },
    }
});
