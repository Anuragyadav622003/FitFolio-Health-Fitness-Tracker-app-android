const mongoose = require('mongoose');
const scoreSchema = mongoose.Schema({
score:{type:Number,default:0},
 userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
 userName:{type:String,require:true},
 profileImage:{type:String}

});
const leaderBoard = mongoose.model("leaderboard",scoreSchema);
module.exports = leaderBoard;