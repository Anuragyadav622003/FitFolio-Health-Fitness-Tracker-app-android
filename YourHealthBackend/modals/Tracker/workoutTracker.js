const mongoose = require('mongoose');

const getTodayDate = () => {
  const today = new Date();
  today.setHours(5,30, 0, 0);
 
  const datePart = today.toISOString().split('T')[0];

  return datePart;
};
const workoutTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String,default:getTodayDate(), required: true },

    running: {
      score: { type: Number, default: 0 },
      caloriesBurned: { type: Number, default: 0 }
    },
    walking: {
      score: { type: Number, default: 0 },
      caloriesBurned: { type: Number, default: 0 }
    },
    bicycling: {
      score: { type: Number, default: 0 },
      caloriesBurned: { type: Number, default: 0 }
    },
    swimming: {
      score: { type: Number, default: 0 },
      caloriesBurned: { type: Number, default: 0 }
    },

});


const WorkoutTracker = mongoose.model('WorkoutTracker', workoutTrackerSchema);

module.exports = WorkoutTracker;
