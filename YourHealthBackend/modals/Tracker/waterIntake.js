const mongoose = require('mongoose');
const getTodayDate = () => {
  const today = new Date();
  today.setHours(5,30, 0, 0);
 
  const datePart = today.toISOString().split('T')[0];

  return datePart;
};
const waterIntakeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  date: { type: String,default:getTodayDate() },
  score:{type:Number,default:0},
  progress: { type: Number, default: 0 },  // Amount of water consumed
  goals: { type: Number, required: true }   // Daily goal
});


const WaterIntake = mongoose.model('WaterIntake', waterIntakeSchema);

module.exports = WaterIntake;
