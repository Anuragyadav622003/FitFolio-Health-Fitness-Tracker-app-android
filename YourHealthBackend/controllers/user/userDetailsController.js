const user = require('../../modals/User/User')

// Create a new user
exports.createUserDetails = async (req, res) => {
  try {  console.log(req.body);
    const response = await user.findByIdAndUpdate({_id:req.user},{$set:req.body},{new:true,upsert:true});
   console.log(response)
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
exports.getAllUserDetails = async (req, res) => {
  try {  const user_id = req.user;
    const userDetail = await user.find({_id:user_id});
    console.log(userDetail,"userDetails")
    res.status(200).json(userDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await UserDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
