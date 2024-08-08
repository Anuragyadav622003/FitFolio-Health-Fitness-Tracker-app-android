/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

import messaging from '@react-native-firebase/messaging';
//react-native-push-notification
// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  requestPermissions: Platform.OS === 'ios',
 
});
//firebase
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('message handle in background!', remoteMessage);
});
messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    console.log('Initial notification received:', remoteMessage);
  })
  .catch(error => {
    console.error('Error getting initial notification:', error);
  });

  AppRegistry.registerComponent(appName, () => App);
