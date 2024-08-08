import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const Notify = () => {
  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = () => {
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
      (created, error) => {
        if (error) {
          console.error('Error creating channel:', error);
        } else {
          console.log(`Channel '${healthChannelId}' created successfully`);
        }
      }
    );
  }

  const handleScheduleNotification = () => {
    PushNotification.localNotification({
      channelId: "health-tracker-channel", // Use the channel ID for health tracker notifications
      title: "Health Tracker",
      message: "successfully send the notification",
      smallIcon: "ic_launcher",
    });
  };
  const handleScheduleTimeNotification = () => {
    console.log('hello')
    PushNotification.localNotificationSchedule({
      channelId: "health-tracker-channel",
      title: "Health Tracker",
      message: "successfully send the shedule message",
       date: new Date(Date.now() + 20 * 1000), // Schedule notification 10 seconds from now

      });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Push Notification Example</Text>
      <Button title="Schedule Notification" onPress={handleScheduleNotification} />
      <Text>Push sheduleTime Notification Example</Text>
      <Button title="ScheduleTime Notification" onPress={handleScheduleTimeNotification} />
    </View>
  );
};

export default Notify;
