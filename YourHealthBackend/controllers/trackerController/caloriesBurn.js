
const WorkoutTracker = require('../../modals/Tracker/workoutTracker');
const getTodayDate = () => {
    const today = new Date();
    today.setHours(5,30, 0, 0);
   
    const datePart = today.toISOString().split('T')[0];

    return datePart;
  };
exports.totalCaloriesBurnToday = async(req,res)=>{ 
      try { const today = getTodayDate();
      
  
     
            const response = await WorkoutTracker.findOne({userId:req.user,date:today});
            if(!response)
              {
                res.status(201).json(0);
              }
            const TotalCalories = response.running.caloriesBurned+response.walking.caloriesBurned+response.bicycling.caloriesBurned+response.swimming.caloriesBurned;
          
            res.status(201).json(TotalCalories);
      } catch (error) {
        res.status(500);
      }

};
