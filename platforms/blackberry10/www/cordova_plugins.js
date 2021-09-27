cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.blackberry.ui.toast/www/client.js",
        "id": "com.blackberry.ui.toast.client",
        "clobbers": [
            "blackberry.ui.toast"
        ]
    },
    {
        "file": "plugins/com.blackberry.push/www/client.js",
        "id": "com.blackberry.push.client",
        "clobbers": [
            "blackberry.push"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.blackberry.ui.toast": "1.0.0",
    "com.blackberry.push": "1.0.0",
    "com.blackberry.utils": "1.0.0"
}
// BOTTOM OF METADATA
});