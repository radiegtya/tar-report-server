/**
 * Do this on startup:
 * 1. create admin user
 */
Meteor.startup(function () {
    const admin = Meteor.users.findOne({"profile.group": "admin"});
    if(!admin){
      Accounts.createUser({
        username: "admin",
        password: "idem",
        profile: {
          group: "admin"
        }
      });
    }

    const user = Meteor.users.findOne({"profile.group": "user"});
    if(!user){
      Accounts.createUser({
        username: "user",
        password: "tar2017",
        profile: {
          group: "user"
        }
      });
    }


    // //please comment at production, this is for testing purpose only
    // for(i = 1;i<100;i++){
    //   Account.insert({code: i, name: "Akun-" + i, balance: 0});
    // }

    // 👔Pemasukan👔
    // ✅IPL
    // ✅Donasi
    // ✅Pemasukan Lainnya
    //
    // 👗Pengeluaran👗
    // ✅Keamanan
    // ✅Kebersihan
    // ✅Listrik
    // ✅Konsumsi Acara
    // ✅Penambahan Fasilitas
    // ✅Pengeluaran Lainnya
    const account = Account.findOne();
    if(!account){
      const accounts = [
        {
          _id: "kas",
          code: "3001",
          name: "kas",
          balance: 0
        },
        {
          _id: "ipl",
          code: "1001",
          name: "ipl",
          type: "income",
          balance: 0
        },
        {
          _id: "donasi",
          code: "1002",
          name: "donasi",
          type: "income",
          balance: 0
        },
        {
          _id: "pemasukan_lainnya",
          code: "1003",
          name: "pemasukan_lainnya",
          type: "income",
          balance: 0
        },
        {
          _id: "keamanan",
          code: "2001",
          name: "keamanan",
          type: "spending",
          balance: 0
        },
        {
          _id: "kebersihan",
          code: "2002",
          name: "kebersihan",
          type: "spending",
          balance: 0
        },
        {
          _id: "listrik",
          code: "2003",
          name: "listrik",
          type: "spending",
          balance: 0
        },
        {
          _id: "konsumsi",
          code: "2004",
          name: "konsumsi",
          type: "spending",
          balance: 0
        },
        {
          _id: "penambahan_fasilitas",
          code: "2005",
          name: "penambahan_fasilitas",
          type: "spending",
          balance: 0
        },
        {
          _id: "pengeluaran_lainnya",
          code: "2006",
          name: "pengeluaran_lainnya",
          type: "spending",
          balance: 0
        },
      ];

      accounts.forEach((obj)=>{
        Account.insert(obj);
      });
    }

    // Listen to incoming HTTP requests, can only be used on the server
    WebApp.connectHandlers.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        return next();
    });
});
