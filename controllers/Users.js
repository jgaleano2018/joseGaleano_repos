const Users = require("../Model/Users");

const getUsers = (req, res) => {
    Users.find((err, users) => {
        if (err) {
        res.send(err);
        }
        res.json(users);
    });
};

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};

const createUsers = (req, res) => {
    const users = new Users({
      id: req.body.id,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      createdDate: req.body.createdDate,
      lastUpdate: req.body.lastUpdate,
    });
  
    users.save((err, users) => {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
};

const updateUsers = (req, res) => {
    Users.findOneAndUpdate(
      { _id: req.params.userID },
      {
        $set: {
            id: req.body.id,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            createdDate: req.body.createdDate,
            lastUpdate: req.body.lastUpdate,
        },
      },
      { new: true },
      (err, Users) => {
        if (err) {
          res.send(err);
        } else res.json(Users);
      }
    );
};

const deleteUsers = (req, res) => {
    Todo.deleteOne({ _id: req.params.userID })
      .then(() => res.json({ message: "User Deletedddd3333" }))
      .catch((err) => res.send(err));

  };