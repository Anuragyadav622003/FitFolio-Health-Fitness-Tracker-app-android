const Feedback = require('../../modals/FeedBack/feedBack');
const User = require('../../modals/User/User'); // Assuming you have a User model to fetch user details

// Create or update user feedback
exports.createFeedback = async (req, res) => {
  try {
    // Validate required fields
    const { usability, features, satisfaction, bugReport, suggestions } = req.body;
    if (!usability || !features || !satisfaction || !bugReport || !suggestions) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Fetch user details
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const image = user.profileImage;

    // Delete existing feedback for the user if it exists
    await Feedback.deleteMany({ userId: req.user });

    // Prepare feedback data
    const newDate = new Date().toDateString().split(' ');
    const feedbackData = {
      usability,
      features,
      satisfaction,
      bugReport,
      suggestions,
      userId: req.user,
      name: user.name,
      date: `${newDate[2]} ${newDate[1]} ${newDate[3]}`,
      profileImage: image,
    };

    // Insert new feedback
    const newFeedback = await Feedback.create(feedbackData);

    // Send response
    return res.status(201).json(newFeedback);
  } catch (error) {
    console.error('Error creating feedback:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all feedback
exports.getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});
    const userId = req.user;

    return res.status(200).json({ feedbacks, userId });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
