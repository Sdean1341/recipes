const RecipesController = require('../controllers/recipes.controller');

module.exports = (app) => {
    app.post('/api/recipe/', RecipesController.createRecipe);
    app.get('/api/recipe/', RecipesController.findAll);
    app.get('/api/recipe/:id', RecipesController.findOne);
    app.put('/api/recipe/:id', RecipesController.update);
    app.delete('/api/recipe/:id', RecipesController.destroy);
}