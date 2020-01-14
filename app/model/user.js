'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    age: { type: Number },
    name: { type: String },
    info: { type: String },
    create_time: { type: Date, default: Date.now },
  });
  return mongoose.model('User', UserSchema, 'user');
};
