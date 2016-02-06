var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, lowercase: true, unique: true},
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password) {
  this.salt = bcrypt.genSaltSync(10);
  this.hash = bcrypt.hashSync(password, salt);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.hash);
};

userSchema.methods.generateJWT = function() {
  // set expiration to 60 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, process.env.JWT_SECRET);
}

module.exports = mongoose.model('User', userSchema);
