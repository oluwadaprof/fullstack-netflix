const router = require("express").Router();
const Movie = require("../models/Movie");
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/User");
const verify = require("../verifyToken")

//create movie
router.post("/", verify, async(req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
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

//update movie
router.put("/find/:id", verify, async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(201).json(updatedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you are not allowed to update movie")
    }
})

//get random movies 
router.get("/random", verify, async(req, res) => {
    const type = req.query.type
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ])
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ])
        }
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json("movie deleted successfully")
    }
})

//delete movie
router.delete("/:id", verify, async(req, res) => {
    if (req.user.isAdmin) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
    }
})

//get all movies as user or admin  
router.get("/", verify, async(req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse())
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router