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

exports.getReceipebyID = function (req,res){
  Receipe.findById(req.params.receipeID, function(err, receipe) {
    if (err)
      res.send(err);
    res.json(receipe);
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


exports.update_receipe = function(req, res) {
  Receipe.findOneAndUpdate({_id: req.params.receipeID}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_receipe = function(req, res) {
  Receipe.remove({
    _id: req.params.receipeID
  }, function(err, receipe) {
    if (err)
      res.send(err);
    res.json({ message: 'Receipe successfully deleted' });
  });
};

// exports.create_user = function (req,res){
//     if (req.body.email &&
//         //req.body.username &&
//         req.body.password ) {
//
//         var userData = {
//             email: req.body.email,
//             //username: req.body.username,
//             password: req.body.password
//         }
//
//         //use schema.create to insert data into the db
//         User.create(userData, function (err, user) {
//             if (err) {
//               res.send(err);
//             } else {
//                 res.json({ message: 'User created' })
//             }
//         });
//     }
// };

exports.getProfile = function (req,res){
   res.json(req.user);
};




