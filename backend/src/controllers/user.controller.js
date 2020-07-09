const User = require("../models/user.model");

exports.addUser = function (req, res, next) {
  res.send('Birds home page');
};

exports.createUser = (req, res, next) => {
  let user = new User(
    {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    }
  );

  user.save( (err) => {
    if(err) {
      console.log(err)
      return next(err);
    }
    res.send("User account created successfully");
  })
};

exports.getAllUsers = async (req, res, next) => {
   res.send( await User.find(
    {},
    "_id email firstname lastname"
    ).exec()
    );
};

exports.getUser = async (req, res, next) => {
  res.send( await User.findById(
    req.params.id,
    "_id email firstname lastname"
    ).exec()
    );
}
