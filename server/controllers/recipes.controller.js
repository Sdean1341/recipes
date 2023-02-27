const Recipe = require('../models/recipes.model');

module.exports = {
    createRecipe: (req, res) => {
        const { body } = req;
        Recipe.create(body)
            .then((recipe) =>
            res.json({
                message: "successfully created new recipe",
                recipe: recipe,
                })
            )
            .catch(err => 
                res.status(400).json({
                    message: "something went wrong with recipe.Create()",
                    error:err,
                })
            );
    },

    findAll: (req, res) => {
        Recipe.find()
            .then((allRecipes) => res.json(allRecipes))
            .catch(err =>
                res.status(500).json({
                    message: "something went wrong with recipe.find()",
                    error:err,
                })
            );
    },

    findOne: (req, res) => {
        Recipe.findById(req.params.id)
            .then(oneRecipe => res.json(oneRecipe))
            .catch(err => 
                res.status(400).json({
                        message: "something went wrong with Recipe.findById()",
                        error: err,
                    })
                );
    },
    update:(req, res) => {
        Recipe.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then(updatedRecipe => res.json({message: "successfully updated recipe", 
            updatedRecipe: updatedRecipe }))
            .catch(err => 
                res.status(400).json({
                message: "something went wrong with recipe.update()", 
                error:err }))
    },

    destroy: (req, res) => {
        Recipe.findByIdAndDelete(req.params.id)
            .then(deleteMessage => res.json({message: deleteMessage}))
            .catch(err => 
                res.status(400).json({
                message: "something went wrong with recipe.destroy()",
                error:err}))
    },
}
