Meteor.methods({
  'Storage.upload': function(base64Data, name){
    var data = Config.PYTHON_STORAGE_DATA;
    data.data = base64Data;
    data.file = {name: name};

    var res = HTTP.post(Config.PYTHON_STORAGE_URL,{
      data: data
    });

    return res.data;
  }
});
