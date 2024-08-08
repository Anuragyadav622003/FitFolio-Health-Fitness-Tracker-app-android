const leaderBoard  = require('../../modals/leaderboard/leaderBoard')

exports.createLeaderBoard =async (req,res)=>{
try {   console.log('leaderboard');
const response = await leaderBoard.find().sort({ score: -1 });
console.log(response)
const userId = req.user;
    res.status(200).json({response,userId});
} catch (error) {
   console.log('error in createLeaderboard',error) ;
   res.status(400);
}
};