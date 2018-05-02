/*
 * create new mongo collection
 */
Ledger = new Mongo.Collection("ledger");

/*
 * define the schema
 */
var schemas = new SimpleSchema({
    journalId: {
        type: String,
        label: "Journal",
    },
    accountId: {
        type: String,
        label: "Account",
    },
    debit: {
      type: Number,
      optional: true,
      label: "Debit"
    },
    credit: {
      type: Number,
      optional: true,
      label: "Credit"
    },
    /* AUTOVALUE */
    createdBy: {
        type: String,
        label: "Owner User",
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
Ledger.attachSchema(schemas);

/*
 * allow insert for loggedin user which is called group "user"
 * and also allow insert for admin user which is called group "admin"
 * in this tutorial we'll use simple GROUP ROLE functionality
 * you can modify this later if you want to use "userIsInRole" rather than "userIsInGroup"
*/
Ledger.allow({
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
Ledger.helpers({
    /* belongsTo relation Ledger, and where userId not equal livechat */
    LedgerMember: function () {
        return LedgerMember.findOne({LedgerId: this._id, userId: {$ne: 'livechat'}});
    },
});
