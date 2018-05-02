/*
 * create new mongo collection
 */
Account = new Mongo.Collection("account");

/*
 * define the schema
 */
var schemas = new SimpleSchema({
    _id: {
        type: String,
        label: "id",
        optional: true
    },
    code: {
        type: String,
        label: "Code",
    },
    name: {
        type: String,
        label: "Name",
    },
    balance: {
        type: Number,
        label: "Balance",
        optional: true
    },
    type: {
        type: String,
        label: "Type",
        optional: true
    },
    /* AUTOVALUE */
    createdBy: {
        type: String,
        label: "Created By",
        autoValue: function () {
            if (this.isInsert && !this.value)
                return this.userId;
        },
        denyUpdate: true,
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true
    }
});
//attach the schema to collection
Account.attachSchema(schemas);

/*
 * allow insert for loggedin user which is called group "user"
 * and also allow insert for admin user which is called group "admin"
 * in this tutorial we'll use simple GROUP ROLE functionality
 * you can modify this later if you want to use "userIsInRole" rather than "userIsInGroup"
*/
Account.allow({
    insert: function (userId, doc) {
        return userId ? true: false;
    },
    update: function (userId, doc) {
        return userId ? true: false;
    },
    remove: function (userId, doc) {
        return userId ? true: false;
    },
});


/*
 * in meteoris we can use dburles:collection-helper package out of the box
 * so we can get belongsTo relationship easily using this code
 */
Account.helpers({
    // /* belongsTo relation Account, and where userId not equal livechat */
    // AccountMember: function () {
    //     return AccountMember.findOne({AccountId: this._id, userId: {$ne: 'livechat'}});
    // },
});
