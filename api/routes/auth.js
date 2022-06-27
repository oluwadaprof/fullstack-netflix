const router = require("express").Router();
const User = require('../models/User');
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")

//register user
router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })
    try {
        const user = await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


//User login 
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("wrong password or username")
            // console.log(user.password)

        const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
        const realPassword = bytes.toString(CryptoJs.enc.Utf8)

        realPassword !== req.body.password && res.status(401).json("wrong password or username")
        const { password, ...info } = user._doc;

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.SECRET_KEY, { expiresIn: "5d" })

        res.status(200).json({...info, accessToken })
    } catch (error) {
        res.status(500).json(error)
        console.log(error, 'error')
    }
})

module.exports = router;