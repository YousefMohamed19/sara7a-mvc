import express from 'express';
import { connectDB } from './db/connection.js';
import authRouter from './src/modules/auth/auth.router.js';
import messagesRouter from './src/modules/messages/messages.router.js';

const app = express();
const port = 3000;
app.use('/public',express.static('public'));
app.use(express.urlencoded({ extended: true }));
connectDB();




app.get('/', (req, res,next) => {
    res.render('home.ejs')
})

app.use('/auth', authRouter)
app.use('/message', messagesRouter)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})