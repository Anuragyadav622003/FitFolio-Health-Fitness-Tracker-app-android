// controllers/workoutTrackerController.js

const workoutTracker =   require('../../modals/Tracker/workoutTracker');
const user = require('../../modals/User/User');
const leaderBoard = require('../../modals/leaderboard/leaderBoard');
const getTodayDate = () => {
  const today = new Date();
  today.setHours(5,30, 0, 0);
 
  const datePart = today.toISOString().split('T')[0];

  return datePart;
};

function calculateScore(workoutType, caloriesBurned) {
  let score = 0;
  switch (workoutType) {
    case 'running':
      score = caloriesBurned / 10;
      break;
    case 'walking':
      score = caloriesBurned / 20;
      break;
    case 'bicycling':
      score = caloriesBurned / 15;
      break;
      case 'swimming':
        score = caloriesBurned / 15;
        break;
    // Add more workout types as needed
  }
  return score;
}


exports.createWorkout = async (req, res) => {
  try {  
    const today = getTodayDate();
    const userId = req.user;

    const { type, caloriesBurned } = req.body;
    const score =  calculateScore(type,caloriesBurned);
    

    // Validate input
    if (!type || !caloriesBurned) {
      return res.status(400).json({ message: 'Type and caloriesBurned are required' });
    }

    const data = {
    
        [`${type}.score`]: parseInt(score,10), // Update the score for the specified workout type
        [`${type}.caloriesBurned`]: caloriesBurned // Update the calories burned for the specified workout type

    }
    
    // Find the workout tracker for the user and today's date, or create a new 
 const existingItem = await workoutTracker.findOneAndUpdate({userId:userId,date:today},{$set:data},{new:true,upsert:true});

 try {
  const Name = await user.findOne({_id:req.user});
  
   const userName = Name.name;
       const leader = await leaderBoard.findOneAndUpdate({ userId:req.user},  {
         $inc: { score: parseInt(score,10) },
         $set: { userName:userName,profileImage:Name.profileImage }
       },{new:true,upsert:true});
   
 } catch (error) {
  console.log('error',error);
 }
// 
 console.log(existingItem);
    res.status(200).json(existingItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkoutByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const workout = await  workoutTracker.find({ userId });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Add more controller methods as needed
