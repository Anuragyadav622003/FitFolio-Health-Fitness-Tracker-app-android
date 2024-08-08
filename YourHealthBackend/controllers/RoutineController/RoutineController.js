const Activity = require("../../modals/Routine/Routine");

// Controller to create a new user schedule entry
exports.createUserSchedule = async (req, res) => {
  try {
    const { activities } = req.body;
    const userId = req.user;

    // Validate the request
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (!Array.isArray(activities) || activities.length === 0) {
      return res.status(400).json({ message: "Activities are required" });
    }

    const updateData = {};

    // Map the activities to the update data format
    activities.forEach((activity) => {
      if (activity.activity && activity.time) {
        updateData[`${activity.activity}.time`] = activity.time;
      }
    });

    // Perform upsert operation
    const result = await Activity.findOneAndUpdate(
      { user_id: userId }, // Filter
      { $set: updateData }, // Update data
      { new: true, upsert: true } // Options: return the updated document and perform upsert
    );

    return res.status(201).json(result);
  } catch (error) {
    console.error("Error upserting activities:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Controller to get user schedule by user ID
exports.getUserSchedule = async (req, res) => {
  try {
    const userId = req.user;

    // Validate the request
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find user schedule by user ID
    const userSchedule = await Activity.findOne({ user_id: userId });

    if (!userSchedule) {
      return res.status(200).json({
        __v: 0,
        _id: "",
        activityLevel: "Intermediate",
        bicycling: {
          largeIcon: "https://th.bing.com/th/id/OIG4.Wwugqbz5ZqsDim1f8AMi?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn",
          message: "It's the perfect time for a refreshing bike ride. Enjoy your ride and stay fit!",
          picture: "https://th.bing.com/th/id/OIG4.Wwugqbz5ZqsDim1f8AMi?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn",
          time: "7:30 PM",
          title: "Get Ready to Cycle!",
        },
        running: {
          largeIcon: "https://th.bing.com/th/id/OIG3.boEaZaIL5nYubPn_8z3o?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn",
          message: "Lace up your running shoes and hit the track. Let's get those endorphins flowing!",
          picture: "https://th.bing.com/th/id/OIG3.boEaZaIL5nYubPn_8z3o?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn",
          time: "6:30 AM",
          title: "Time to Hit the Track!",
        },
        swimming: {
          largeIcon: "https://th.bing.com/th/id/OIG2.qvyb5PIn7oZXEViND822?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn&cb=1718175183337",
          message: "Get ready to make a splash! Enjoy your swimming session and stay healthy.",
          picture: "https://th.bing.com/th/id/OIG2.qvyb5PIn7oZXEViND822?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn&cb=1718175183337",
          time: "8:00 AM",
          title: "Dive into the Pool!",
        },
        user_id: userId,
        walking: {
          largeIcon: "https://th.bing.com/th/id/OIG4.A0LhrL5ZJdIRPzFbRzia?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn",
          message: "It's time for a relaxing walk. Stretch your legs and enjoy the fresh air.",
          picture: "https://th.bing.com/th/id/OIG4.A0LhrL5ZJdIRPzFbRzia?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn",
          time: "6:00 AM",
          title: "Time for a Walk!",
        },
        waterIntake: {
          largeIcon: "https://th.bing.com/th/id/OIP.OQzYQi-6a7opYVqKA3baqwHaFo?w=257&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          message: "Stay hydrated! Drink some water now.",
          picture: "https://th.bing.com/th/id/OIP.OQzYQi-6a7opYVqKA3baqwHaFo?w=257&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          time: "5:00 AM",
          title: "Hydration Reminder!",
        },
      });
    }

    return res.status(200).json(userSchedule);
  } catch (error) {
    console.error("Error fetching user schedule:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
