FlowRouter.route('/', {
    name: 'Home',
    action: function () {
        BlazeLayout.render('Home');
    },
});
