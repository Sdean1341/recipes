const mongoose = require('mongoose');
const RecipeSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [ true, 
            "Title is required"]
    },
    skillLevel: { 
        type: String,
        minLength:[ 3, "Skill level must be at least three characters long" ],
        required:[ true,
        "Skill level is required"]
    },
    time: {
        type: String,
        minLength: [2, "Time must be at least two characters long"],
        required: [true, "Amount of time is required"]
    },
    ingredients: {
        type: String,
        required: [true, "Must list ingredients"]
    },
    instructions :{
        type: String,
        minLength: [5, "instructions must be at least 5 characters long"],
        required: [true, "instructions required"]
    },
    otherDetails: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Recipes', RecipeSchema);