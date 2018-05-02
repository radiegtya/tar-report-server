CybermantraDesktopNotification = {
    call: function(options) {
        var title = "New Notification";
        var body = "";
        var icon = "/images/logo/icon.jpg";
        var sound = "/sounds/notification.ogg";
        var dir = "auto";

        //play sound
        var s = new buzz.sound(sound);
        s.play();

        if (options) {
            if (options.title)
                title = options.title;
            if (options.body)
                body = options.body;
            if (options.icon)
                icon = options.icon;
            if (options.sound)
                sound = options.sound;
            if (options.dir)
                dir = options.dir;
        }

        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            var options = {
                body: body,
                icon: icon,
                dir: dir
            };
            var notification = new Notification(title, options);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function(permission) {
                if (!('permission' in Notification)) {
                    Notification.permission = permission;
                }

                if (permission === "granted") {
                    var options = {
                        body: body,
                        icon: icon,
                        dir: dir
                    };
                    var notification = new Notification(title, options);
                }
            });
        }
    }
};
