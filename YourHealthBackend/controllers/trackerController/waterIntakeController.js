// controllers/waterIntakeController.js
const WaterIntake = require('../../modals/Tracker/waterIntake');
const user = require('../../modals/User/User');
const leaderBoard = require('../../modals/leaderboard/leaderBoard');

const getTodayDate = () => {
  const today = new Date();
  today.setHours(5,30, 0, 0);
 
  const datePart = today.toISOString().split('T')[0];

  return datePart;
};
// Controller methods for Water Intake Tracker
exports.createWaterIntake = async (req, res) => {
  try {
  
   const today = getTodayDate();
    const glassesIntake = {
         date:today,
         score:parseInt(req.body.progress,10) >= parseInt(req.body.totalGlasses,10) ? 50:0,
       userId:req.user,
       progress:parseInt(req.body.progress,10),
       goals:parseInt(req.body.totalGlasses,10)
    };
    const existingRecord = await WaterIntake.findOneAndUpdate(
      { userId:req.user, date: today },
      { $set: glassesIntake }, // Update with the data in req.body
      { new: true, upsert: true } // Return the updated document and create if not found
    );

    //leaderBoard
    try {
      if(parseInt(req.body.progress,10) >= parseInt(req.body.totalGlasses,10) )
          {   const Name = await user.findOne({_id:req.user});
    const userName = Name.name;
      
            const leader = await leaderBoard.findOneAndUpdate({ userId:req.user},  {
              $inc: { score:50 },
              $set: { userName:userName,profileImage:Name.profileImage }
            },{new:true,upsert:true});
    
       
          }
        
    } catch (error) {
      console.log("error",error)
    }
    // 
  console.log(existingRecord);
 
   
res.status(200).json(existingRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWaterIntakeByUser = async (req, res) => {
  try {

    const today = getTodayDate();
    const waterIntake = await WaterIntake.find({ userId:req.user,date:today });
   
    res.status(200).json(waterIntake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Add more controller methods as needed
