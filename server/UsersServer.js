Meteor.publishComposite('users', function (selector, options) {
    console.log("subscribing some Users with it's relation");
    var selector = selector || {};
    var options = options || {};
    return{
        find: function () {
            return Meteor.users.find(selector, options);
        },
        children: [
            /* belongsTo ChannelMember */
            {
                find: function (collection) {
                    return ChannelMember.find({userId: collection._id});
                },
            },
            // /* belongsTo user */
            // {
            //     find: function (collection) {
            //         return Meteor.users.find(collection.userId);
            //     },
            // },
        ],
    }
});


Meteor.methods({
  "Users.findOne": function(selector, options){
    var selector = selector || {};
    var options = options || {};

    return Meteor.users.findOne(selector, options);
  },
  'Users.setOneSignalId': function (id) {
      var user = Meteor.users.findOne(this.userId);
      if (user) {
          var oneSignalIds = typeof user.profile.oneSignalIds != "undefined" ? user.profile.oneSignalIds : [];

          if (oneSignalIds.indexOf(id) == -1)
              Meteor.users.update(this.userId, {$push: {'profile.oneSignalIds': id}});
      }
  },
  'Users.removeOneSignalId': function (id) {
      console.log(this.userId)
      var user = Meteor.users.findOne(this.userId);
      if (user) {
          var oneSignalIds = typeof user.profile.oneSignalIds != "undefined" ? user.profile.oneSignalIds : [];

          console.log(oneSignalIds)

          if (oneSignalIds.indexOf(id) != -1)
              Meteor.users.update(this.userId, {$pull: {'profile.oneSignalIds': id}});
      }
  },
  // "Users.faker": function(){
  //   for(var i=1;i<50;i++){
  //     console.log(i)
  //     const username = "demo" + i;
  //     const email = "demo"+ i + "@demo.com";
  //     const password = "demo";
  //     const defaultProfileGroup = "user";
  //     const defaultChannelId = "general";
  //     console.log(username)
  //
  //     const userId = Accounts.createUser({
  //       username: username,
  //       email: email,
  //       password: password,
  //       profile: {
  //         group: defaultProfileGroup
  //       }
  //     });
  //     Meteor.call('ChannelMember.insert', {userId: userId, channelId: defaultChannelId});
  //   }
  // }
});
