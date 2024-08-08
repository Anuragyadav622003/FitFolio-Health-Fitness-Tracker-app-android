const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    usability: { type: String },
    features: { type: String },
    satisfaction: { type: String},
    suggestions: { type: String },
    bugReport: { type: String },
    name: { type: String },
    date: { type: String },
    profileImage:{type:String},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
  });
  const Feedback = mongoose.model('Feedback', feedbackSchema);
  module.exports = Feedback;