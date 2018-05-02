Meteor.methods({
  'resetDatabase': ()=>{
    //update account balance to 0
    Account.update({}, {$set: {balance: 0}}, {multi:true});

    //remove all journal
    Journal.remove({});

    //remove all ledger
    Ledger.remove({});
  }
})
