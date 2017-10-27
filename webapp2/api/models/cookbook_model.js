'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReceipeSchema = new Schema({
  name: {
    type: String,
    required: 'A receipe needs a name.'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Created_by:{
    type: String,
    default: null
  },
  ingredients:{
    type: {},
    required: 'A receipe needs ingredients.'
  }
}, {collection: 'receipe'});


var Receipe = mongoose.model('Receipe', ReceipeSchema);
module.exports = Receipe;