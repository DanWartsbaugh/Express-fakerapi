const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true,"Your joke must have a setup"],
        minlength: [10,"The setup must be at least ten characters"]
    },
    punchline:{
        type: String,
        required: [true,"Your joke must have a punchline"],
        minlength: [3,"The punchline must be at least three characters"]
    }

},{timestamps:true})

module.exports = mongoose.model("Joke",JokeSchema)