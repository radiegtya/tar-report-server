Config = {
  version: "v0.1",
};

Template.registerHelper('version', (text)=>{
  return Config.version;
});
