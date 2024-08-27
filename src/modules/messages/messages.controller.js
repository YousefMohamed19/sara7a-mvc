import QRCode from 'qrcode'
import { Message } from '../../../db/models/message.model.js';
export const getMessages = async (req, res, next) => {

    if (req.session.isLoggedIn) {
        let url = `${req.protocol}://${req.headers.host}/user/${req.session.userId}`
        let qrCode = await QRCode.toDataURL(url)
        const messages = await Message.find({ user: req.session.userId })
        return res.render('message.ejs', { session: req.session, url, qrCode, messages })
    }
    return res.redirect('/auth/login')
}