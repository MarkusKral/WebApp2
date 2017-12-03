'use strict';

var mongoose = require('mongoose'),
  Receipe = mongoose.model('Receipe'),
  User = mongoose.model('User');
var bcrypt = require('bcrypt');
var path = require('path');

exports.list_all_receipe= function(req, res) {
  Receipe.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.newestReceipes= function(req, res) {
  // doesnt work currently
  Receipe.find({}).sort({ Created_date : -1 }).exec(function(err, task) {
    if (err)
      res.send  (err);
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

exports.getReceipebyUser = function (req,res){
  Receipe.find({Created_by: req.params.userID}, function(err, receipe) {
    if (err)
      res.send(err);
    res.json(receipe);
  });
};

exports.create_a_receipe = function(req, res) {
  console.log("inside creation");
  console.log(req.body);

  req.body.Created_by = req.user._id;
  var new_receipe = new Receipe(req.body);
  new_receipe.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_receipe = function(req, res) {
  console.log("inside update");
  console.log(req.body);
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

exports.search_receipe= function(req, res) {
  Receipe.find({name: {"$regex" : req.params.searchParam}}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
// toadd:
// search-method
// update-receipe, check for same user


exports.getProfile = function (req,res){
   res.json(req.user);
};

exports.index = function(req, res) {
  //route to handle all angular requests
   //res.sendFile(path.resolve('../views/index.ejs')); // load our public/index.ejs file
  res.render('index', {title: 'mkr'});
};






