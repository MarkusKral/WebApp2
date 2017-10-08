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
  //   required: true,
  //   trim: true
  // },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
    unique: true,
    default: null
  }
},{collection: 'user'});

//
// UserSchema.pre('save', function (next) {
//     var user = this;
//     bcrypt.hash(user.password, 10, function (err, hash){
//         if (err) {
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     })
// });

//authenticate input against database
// UserSchema.statics.authenticate = function (email, password, callback) {
//     User.findOne({ email: email })
//         .exec(function (err, user) {
//             if (err) {
//                 return callback(err)
//             } else if (!user) {
//                 var err = new Error('User not found.');
//                 err.status = 401;
//                 return callback(err);
//             }
//             bcrypt.compare(password, user.password, function (err, result) {
//                 if (result === true) {
//                     return callback(null, user);
//                 } else {
//                     return callback();
//                 }
//             })
//         });
// }
// generating a hash
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.findByToken = function(token){
  User.findOne({"token": token}, function(err, user) {
    if (err)
      return err;
    return user;
  });}


var User = mongoose.model('User', UserSchema);

module.exports = User;
