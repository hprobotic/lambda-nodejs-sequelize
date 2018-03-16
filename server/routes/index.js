const usersController = require('../controllers').users;
const userItemsController = require('../controllers').userItems;

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to simple api!'
    })
  );
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.post('/api/users/:userId/items', userItemsController.create);
  app.get('/api/items', userItemsController.list);
};
