const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../modals/User/User');
require('dotenv').config();

const  SECRATE_KEY = process.env.SECRATE_KEY;

// Function to generate JWT token
function generateToken(userId) {
  const payload = {
    userId: userId
  };

  return jwt.sign(payload,SECRATE_KEY);
}

// Register User endpoint
exports.RegisterUser = async (req, res) => {
  try {
    // Check if user already exists

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    // Create user data
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
      deviceTokens: [req.body.deviceToken]
    };

    // Save user to database
    const newUser = await User.create(userData);

    // Generate JWT token
    const token = generateToken(newUser._id);

    // Respond with token and user ID
    res.status(201).json({ token, userId: newUser._id });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Login User endpoint
exports.LoginUser = async (req, res) => {
  try {
    // Find user by email
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if password matches
    const passwordMatch = await bcrypt.compare(req.body.password, existingUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Update user's device tokens
    const newDeviceToken = req.body.deviceToken;
    await User.findOneAndUpdate(
      { email: req.body.email },
      { $addToSet: { deviceTokens: newDeviceToken } },
      { new: true }
    );

    // Generate JWT token
    const token = generateToken(existingUser._id);

    // Respond with token and user ID
    res.status(200).json({ token, userId: existingUser._id });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
