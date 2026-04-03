
const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const admin = require('./firebase.config')
const serviceAccount =  require('../drive-c6b5a-firebase-adminsdk-fbsvc-52af46d36a.json')


const storage = firebaseStorage({
    credentials : admin.credential.cert(serviceAccount),
    bucketName :'drive-c6b5a.firebasestorage.app',
    unique : true, 
})

const upload = multer({
    storage : storage,
})

module.exports= upload;