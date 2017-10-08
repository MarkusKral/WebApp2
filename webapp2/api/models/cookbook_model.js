'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Receipe = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  ingredients:{
    type: {},
    required: 'a receipe needs ingredients'
  }
}, {collection: 'receipe'});

module.exports = mongoose.model('Receipe', Receipe);

