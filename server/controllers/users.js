const User = require('../models').User;
const UserItem = require('../models').UserItem;

module.exports = {
  create(req, res) {
    return User.create({
      name: req.body.name
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User.findAll({
      include: [
        {
          model: UserItem,
          as: 'userItems'
        }
      ]
    })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    console.log(req.params.userId);
    return User.findById(req.params.userId, {
      include: [
        {
          model: UserItem,
          as: 'userItems'
        }
      ]
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found'
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  }
};
