import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';

const RoutineNotification = () => {
  // Use useRef to create a mutable ref object to store notification IDs
  const notificationIds = useRef([]);

  useEffect(() => {
    // Call the function to create notification channel when component mounts
    createChannel();
    // Cancel past notifications and schedule routine notifications when component mounts
    cancelPastNotifications();
    handleScheduleTimeNotification();
  }, []);

  // Function to create notification channel
  const createChannel = () => {
    // Define channel configuration
    const healthChannelId = "health-tracker-channel";
    PushNotification.createChannel(
      {
        channelId: healthChannelId,
        channelName: "Custom Notification Channel",
        channelDescription: "Channel Description",
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      // Callback function to handle channel creation result
      (created, error) => {
        if (error) {
          console.error('Error creating channel:', error);
        } else {
          console.log(`Channel '${healthChannelId}' created successfully`);
        }
      }
    );
  }

  // Array of routine notification times and messages
  const notificationTimes =  [
    { id: 1, time: new Date().setHours(6, 0, 0, 0), title: 'Wake Up', message: 'Good morning! Time to start your day.', },
    { id: 2, time: new Date().setHours(7, 0, 0, 0), title: 'Morning Workout', message: 'It\'s time for your morning workout!' },
    { id: 3, time: new Date().setHours(8, 0, 0, 0), title: 'Breakfast', message: 'Enjoy your breakfast.' },
    { id: 4, time: new Date().setHours(10, 0, 0, 0), title: 'Drink Water', message: 'Stay hydrated! Drink some water.' },
    { id: 5, time: new Date().setHours(12, 0, 0, 0), title: 'Lunch', message: 'Time for lunch.' },
    { id: 6, time: new Date().setHours(15, 0, 0, 0), title: 'Afternoon Snack', message: 'Have a healthy snack.' },
    { id: 7, time: new Date().setHours(18, 0, 0, 0), title: 'Dinner', message: 'Enjoy your dinner.' },
    { id: 8, time: new Date().setHours(18, 52, 0, 0), title: 'Evening Workout', message: 'It\'s time for your evening workout!' },
    { id: 9, time: new Date().setHours(21, 17, 0, 0), title: 'Bedtime', message: 'Time to sleep. Have a restful night.' },
  ];
  // Function to schedule routine notification
  const handleScheduleTimeNotification = () => {
    // Get the current time
    const currentTime = new Date().getTime();

    // Iterate through each notification time and schedule or cancel the notification
    notificationTimes.forEach(({ id, time, title, message }) => {
      // Check if the notification's time is in the future
      if (time >= currentTime) {
        // Schedule the notification
        PushNotification.localNotificationSchedule({
          channelId: "health-tracker-channel",
          id: id.toString(), // Convert ID to string for consistency
          title: title,
          message: message,
          date: new Date(time), // Schedule notification for specified time
        
        largeIconUrl: "https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg",
       picture: "https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg",
        });
        // Store the ID of the scheduled notification
        notificationIds.current.push(id.toString());
      } else {
        // Cancel the notification if its time has passed
        PushNotification.cancelLocalNotification({ id: id.toString() });
      }
    });
  };

  // Function to cancel past notifications
  const cancelPastNotifications = () => {
    // Get the current time
    const currentTime = new Date().getTime();
    // Iterate through each notification time
    notificationTimes.forEach(({ time, id }) => {
      // Check if the notification's time is in the past
      if (time < currentTime) {
        // Cancel the notification using its ID
        PushNotification.cancelLocalNotification({ id: id.toString() });
      }
    });
  };

};

export default RoutineNotification;
