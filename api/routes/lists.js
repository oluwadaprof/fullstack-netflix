const router = require("express").Router();
const List = require("../models/List");
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/User");
const verify = require("../verifyToken")

//create movie
router.post("/", verify, async(req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you are not allowed to update list")
    }
})

//delete list
router.delete("/:id", verify, async(req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(201).json("list deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you are not allowed to update list")
    }
})

//get list 
router.get("/", verify, async(req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = []

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([{
                        $sample: {
                            size: 10
                        }
                    },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ])
            } else {
                list = await List.aggregate([{
                        $sample: {
                            size: 10
                        }
                    },
                    { $match: { type: typeQuery } }
                ])
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }])
        }
        res.status(201).json(list)
    } catch (error) {
        res.status(500).json(error)
    }

})




module.exports = router