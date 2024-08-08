const mongoose = require('mongoose');
const userShema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    deviceTokens: [{ type: String }],
    profileImage: { type: String },
    height: { type: String },
    weight: { type: String },
    targetWeight: { type:String },
    age: { type: String },
    gender: { type: String },
    address: { type: String },
    bio: { type: String },
  
  });
  const user = mongoose.model('user', userShema);
  module.exports = user;