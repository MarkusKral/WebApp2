'use strict';


var mongoose = require('mongoose'),
  Receipe = mongoose.model('Receipe'),
  User = mongoose.model('User');
var bcrypt = require('bcrypt')

exports.list_all_receipe= function(req, res) {
  Receipe.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_receipe = function(req, res) {
  var new_receipe = new Receipe(req.body);
  new_receipe.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.create_user = function (req,res){
    if (req.body.email &&
        req.body.username &&
        req.body.password ) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
            if (err) {
              res.send(err);
            } else {
                res.json({ message: 'User created' })
            }
        });
    }
};

// exports.login = function (req, res){
//   User.authenticate(req.body.email, req.body.password);
// }


// exports.login = function (req, res, callback) {
//     //User.statics.authenticate = function (email, password, callback) {
//     User.findOne({email: req.body.email})
//         .exec(function (err, user) {
//             if (err) {
//                 return callback(err)
//             } else if (!user) {
//                 var err = new Error('User not found.');
//                 err.status = 401;
//                 return callback(err);
//             }
//             // if (req.body.password == user.password){
//             //   //return callback(null, user);
//             //     res.json(user)
//             // } else {
//             //   return callback()
//             // }
//             bcrypt.compare(req.body.password, user.password, function (err, result) {
//                 if (result === true) {
//                     return callback(null, user);
//                 } else {
//                     return callback();
//                 }
//             })
//         })
//     //}
// };
