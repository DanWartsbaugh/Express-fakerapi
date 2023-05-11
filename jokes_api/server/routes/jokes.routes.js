const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneJoke);
    app.post('/api/jokes', JokesController.newJoke);
    app.patch('/api/jokes/:id', JokesController.updateJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke)
}
//get all, get one, update, delete, create