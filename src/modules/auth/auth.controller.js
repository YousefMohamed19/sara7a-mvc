import { User } from "../../../db/models/user.model.js"

export const login = (req, res,next) => {
    res.render('login.ejs',{error :req.query.error })
}


export const register = (req, res,next) => {
    res.render('register.ejs',{error :req.query.error})
}


export const handleLogin =async (req, res,next) => {
    // logic of code
    const userExist = await User.findOne({email :req.body.email})
    if(!userExist || !(userExist.password == req.body.password)){
        return res.redirect('/auth/login?error=invalid credintal')
    }
    // res.cookie('userId', userExist._id.toString())
    req.session.isLoggedIn =true
    req.session.email= userExist.email
    req.session.userId=userExist._id.toString()
    res.redirect('/message')
}

export const handleRegister =async (req, res,next) => {
    // logic of code
    // check user exist 
    const userExist = await User.findOne({ email: req.body.email })
    if (userExist) {
        return res.redirect('/auth/register?error=user already exist')
    }
    await User.create(req.body)
    res.redirect('/auth/login')
}