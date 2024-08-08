import { Alert } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import messaging from "@react-native-firebase/messaging";
import Home from './Component/Home';
import LoginScreen from './Component/LoginScreen';
import UserDetail from './Component/Paging/UserDetail';
import TodoList from './Component/TodoList';
import TabNav from './Component/TabNav';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Setting from './Component/MainComponent/Setting';
import Cart from './Component/MainComponent/Cart';
import { Provider} from 'react-redux';
import ReduxStore, { persistor } from './Component/Redux/ReduxStore';

import Animation from './Component/Paging/Animation';
import Splash from './Splash';
import Profile from './Component/MainComponent/Profile';
import RoutineNotification from './Component/RoutineNotification';
import { PersistGate } from 'redux-persist/integration/react';
import FeedbackForm from './Component/MainComponent/FeedbackForm';
import FeedbackList from './Component/MainComponent/FeedbackList';





const Stack = createStackNavigator();

const StackNav = () => {
 
   return (
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name='splash' component={Splash} options={{ headerShown: false }} />         
  <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
  <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
  <Stack.Screen name='paging' component={UserDetail} options={{ headerShown: false }} />
  <Stack.Screen name='todo' component={TodoList} options={{ headerShown: true }} />
  <Stack.Screen name="main" component={TabNav} options={{ headerShown: false }} />
  <Stack.Screen name='settings' component={Setting}  />
  <Stack.Screen name='profile' component={Profile}  options={{ headerShown: false }} />
  <Stack.Screen name = "MyCart" component={Cart}/>
  <Stack.Screen name = "animation" component={Animation} options={{ headerShown: false }} />
  <Stack.Screen name="feedback" component={FeedbackForm} options={{ headerShown: false }}/>
  <Stack.Screen name="feedbackList" component={FeedbackList} options={{ headerShown: false }}/>
  {/* Add more screens here as needed */}
</Stack.Navigator>
      </NavigationContainer>
   );
};



const App = () => {

  useEffect(() => {
    const getDeviceToken = async () => {
      try {
        await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();
        // Send the device token to the backend
        console.log("device token  ->",token)
      await AsyncStorage.setItem('device_token', token);
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };
    getDeviceToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
 
 

  

   return (
    <Provider store={ReduxStore}>
     <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <StackNav/>
  
  <RoutineNotification/>
  
      </SafeAreaProvider>
      </PersistGate>
      </Provider>
   );
};

export default App;

