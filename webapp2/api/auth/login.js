
var mongoose = require('mongoose'),
    User = mongoose.model('User');
var bCrypt = require('bcrypt')
var passport = require('passport');


// Generates hash using bCrypt
var createHash = function(password){
 return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

// see if password is valid
var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}

// exports.login('login', new LocalStrategy({
//     passReqToCallback : true
//   },
//   function(req, username, password, done) {
//     // check in mongo if a user with username exists or not
//     User.findOne({ 'username' :  username },
//       function(err, user) {
//         // In case of any error, return using the done method
//         if (err)
//           return done(err);
//         // Username does not exist, log error & redirect back
//         if (!user){
//           console.log('User Not Found with username '+username);
//           return done(null, false,
//                 req.flash('message', 'User Not found.'));
//         }
//         // User exists but wrong password, log the error
//         if (!isValidPassword(user, password)){
//           console.log('Invalid Password');
//           return done(null, false,
//               req.flash('message', 'Invalid Password'));
//         }
//         // User and password both match, return user from
//         // done method which will be treated like success
//         return done(null, user);
//       }
//     );
// }));



// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));
    // Delay the execution of findOrCreateUser and execute
    // the method in the next tick of the event loop
  //   process.nextTick(findOrCreateUser);
//);
