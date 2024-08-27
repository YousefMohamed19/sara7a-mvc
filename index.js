import mongoSession from 'connect-mongodb-session';
import express from 'express';
import session from 'express-session';
import { connectDB } from './db/connection.js';
import authRouter from './src/modules/auth/auth.router.js';
import messagesRouter from './src/modules/messages/messages.router.js';
import userRouter from './src/modules/user/user.router.js';

const MongoDBStore = mongoSession(session)
const app = express();
const port = 3000;
app.use('/public',express.static('public'));
app.use(express.urlencoded({ extended: true }));
connectDB();
const store =MongoDBStore({
    uri : 'mongodb://127.0.0.1:27017/sara7a-mvc',
    collection : 'mySessions', 
})
app.use(session({
    secret: 'yousef',
    resave: false,
    saveUninitialized:true,
    store
}))



app.get('/', (req, res,next) => {
    res.render('home.ejs')
})

app.use('/auth', authRouter)
app.use('/message', messagesRouter)
app.use('/user',userRouter)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})