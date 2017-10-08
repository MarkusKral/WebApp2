var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  // username: {
  //   type: String,
  //   unique: true,
  //   required: false,
  //   trim: true
  // },
  password: {
    type: String,
    required: true,
  },
  // token: {
  //   type: String,
  //   required: false,
  //   unique: true,
  //   default: null
  //}
},{collection: 'user'});

// generating a hash
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
