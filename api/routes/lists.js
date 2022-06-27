const router = require("express").Router();
const List = require("../models/List");
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/User");
const verify = require("../verifyToken")

//create movie
router.post("/", verify, async(req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you are not allowed to update account")
    }
})




module.exports = router