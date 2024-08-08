// models/weightTracker.js
const mongoose = require('mongoose');
const getTodayDate = () => {
  const today = new Date();
  today.setHours(5,30, 0, 0);
 
  const datePart = today.toISOString().split('T')[0];

  return datePart;
};
const weightTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  date: { type: String, default: getTodayDate() },
  weight: Number
});

const WeightTracker = mongoose.model('WeightTracker', weightTrackerSchema);

module.exports = WeightTracker;
