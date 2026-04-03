const admin = require("firebase-admin");

const serviceAccount = require("../drive-c6b5a-firebase-adminsdk-fbsvc-52af46d36a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "drive-c6b5a.firebasestorage.app",
});

module.exports = admin;