Meteor.publishComposite('ledger', function (selector, options) {
    console.log("subscribing some Ledger");
    var selector = selector || {};
    var options = options || {};
    return{
        find: function () {
            return Ledger.find(selector, options);
        },
    }
});
