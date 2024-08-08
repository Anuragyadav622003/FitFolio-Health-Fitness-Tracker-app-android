const user = require('../../modals/User/User');

exports.createProfile = async(req,res)=>{ 
    try {  
    
       const response =  await user.findOneAndUpdate({_id:req.user},{$set:{profileImage:req.body.profileImage}},{new:true,upsert:true});
      
         res.status(201).json({url:response.profileImage});
    } catch (error) {
        console.log('post profile error',error);
    }

};
exports.getProfile = async(req,res)=>{
try { const response = await user.findOne({_id:req.user});
console.log(response)
    res.status(201).json({data:response});
} catch (error) {
    console.log('get profile error',error);
}
};