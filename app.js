const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const indexRouter = require('./routes/index.routes')

dotenv.config();
const connectToDB = require('./config/db')
connectToDB();

app.set('view engine','ejs');
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', indexRouter)

app.use('/user',userRouter)




app.listen(3000,()=>{
    console.log('Server is running')
})