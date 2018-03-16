const UserItem = require('../models').UserItem;

module.exports = {
  create(req, res) {
    return UserItem.create({
      content: req.body.content,
      userId: req.params.userId
    })
      .then(userItem => res.status(201).send(userItem))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return UserItem.all()
      .then(userItems => res.status(200).send(userItems))
      .catch(error => res.status(400).send(error));
  }
};
