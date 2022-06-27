const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/User");
const verify = require("../verifyToken")

//update user
router.put("/:id", verify, async(req, res) => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            if (req.body.password) {
                req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                res.status(200).json(updatedUser)
            } catch (error) {
                res.status(500).json(error)
                console.log(error)
            }
        } else {
            res.status(403).json("you are not allowed to update account")
        }
    })
    //delete user
router.delete("/:id", verify, async(req, res) => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
                await findByIdAndDelete(req.params.id)
                res.status(200).json("user deleted")
            } catch (error) {
                res.status(500).json(error)
                console.log(error)
            }
        } else {
            res.status(403).json("you are not allowed to delete this account")
        }
    })
    //get user
router.get("/find/:id", async(req, res) => {
        try {
            const user = await findById(req.params.id);
            const { password, ...info } = user._doc;
            res.status(200).json(info)
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    })
    //get all user: admin only
router.get("/", verify, async(req, res) => {
        const query = req.query.new;
        if (req.user.isAdmin) {
            try {
                const users = query ? await User.find(user).sort({ _id: -1 }).limit(10) : await User.find()
                res.status(200).json(users)
            } catch (error) {
                res.status(500).json(error)
                console.log(error)
            }
        } else {
            res.status(403).json("you are not an admin")
        }
    })
    //get user stats
router.get("/stats", async(req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1)

    const monthsArray = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    ]

    try {
        const data = await User.aggregate([{
            $project: {
                month: { $month: "$createdAt" }
            }
        }, {
            $group: {
                _id: "$month",
                total: { $sum: 1 }
            }
        }])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router