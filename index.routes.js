const express =  require('express')
const router = express.Router();
const upload = require('../config/multer.config')
const fileModel = require('../models/file.models')
const authMiddleware = require('../middlewares/authe')
const firebase= require('../config/firebase.config')

router.get('/home',authMiddleware, async (req,res)=>{

   try{
     const userFiles = await fileModel.find({
        user : req.user.userID
     })

     console.log(userFiles)

     throw('error')
    res.render('home',{
        files : userFiles
    });
   } catch(err) {
       console.log(err)
       res.status(501).json({
         message : "Server Error"
          
       })
   }

})

router.post('/upload',authMiddleware, upload.single('file'), async(req,res)=>{
   const newFile = await fileModel.create({
    path:req.file.path,
    originalname:req.file.originalname,
    user : req.user.userID
   })
   res.json(newFile)
})

router.get('/download/:path',authMiddleware,async(req,res)=>{

const loggedInUserId = req.user.userID;
const path = req.params.path;

const file = await fileModel.findOne({
   user : loggedInUserId,
   path : path
})

if(!file){
   return res.status(401).json({
      message : 'unauthorized'

   })
}

const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({

   action:'read',
   expires: Date.now() + 60*1000
})

res.redirect(signedUrl[0])

 
})

module.exports = router;
