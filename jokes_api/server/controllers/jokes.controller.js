const Joke = require('../models/jokes.model');

//The logic for all of the routes goes here
//get all
module.exports.findAllJokes = (req,res) => {
    Joke.find()
    .then((allJokes) => {
        res.json(allJokes)
    })
    .catch((err) => {
        res.json(err)
    })
}

//get one
module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneJoke => {
        res.json(oneJoke)
    })
    .catch((err) => {
        res.json(err)
    })
}

//create new
module.exports.newJoke = (req,res) => {
    Joke.create(req.body)
        .then(newlyAddedJoke => {
            res.json(newlyAddedJoke)
        })
        .catch((err) => {
            res.json(err)
        })
}

//update
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
    .then(updatedJoke => {
        res.json(updatedJoke)
    })
    .catch((err) => {
        res.json(err)
    })
}

//delete
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id:req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json(err)
        })
}