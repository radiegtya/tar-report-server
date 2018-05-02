Meteor.publishComposite('journal', function (selector, options) {
    console.log("subscribing some Journal");
    var selector = selector || {};
    var options = options || {};
    return{
        find: function () {
            return Journal.find(selector, options);
        },
    }
});
