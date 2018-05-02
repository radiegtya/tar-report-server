Package.describe({
    name: 'cybermantra:desktop-notification',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Chatapp Html5 Desktop Notifications.',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {

    api.versionsFrom('1.2.0.2');

    api.use([
        'brentjanderson:buzz@1.0.0'
    ], 'client');

    api.addFiles([
        'DesktopNotification.js',
    ], 'client');

    api.export('CybermantraDesktopNotification');
});
