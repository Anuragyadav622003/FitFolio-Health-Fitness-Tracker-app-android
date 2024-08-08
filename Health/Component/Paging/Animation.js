import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import {  useDispatch } from 'react-redux';
import { setToken } from '../Redux/authSlice';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../Redux/UserDetailsReducer';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  SlideInRight, SlideOutLeft ,
  SlideInDown,SlideOutUp

} from 'react-native-reanimated';

const DURATION = 500;
const DELAY = 100;





export default Animation = () => {
  const [User,setUser ] = useState('');
  const dispatch = useDispatch()
  const userDetails = useSelector(selectUserDetails);
  
  const text = ['Setting up', 'HealthTracker for', User+"...",];
  const navigation = useNavigation();
  const [isShown, setShown] = useState(false);

  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);

  const animateText = () => {
    opacity1.value = withTiming(1, { duration: DURATION });
    opacity2.value = withTiming(1, { duration: DURATION,delay: 100 });
    opacity3.value = withTiming(1, { duration: DURATION,delay: 150 });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShown(true);
      animateText();
    
    }, 2000); // Change 2000 to the desired delay before animation starts in milliseconds
    return () => clearTimeout(timer);
    

  }, []);


  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(25, { duration: 1000 }); // Moves from left 0 to left 50 over 3 seconds
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    backgroundColor: '#404040', // Adding background color for visibility
    borderRadius: 10, // Adding borderRadius for a rounded appearance
    opacity:0.4
  }));
  useEffect(() => {
    async function UserData(){ 
const name = userDetails.name;
setUser(name);
    }
    UserData();
    const navigationTimer = setTimeout(async() => {
 const token = await AsyncStorage.getItem('token');

 dispatch(setToken(token));
      navigation.navigate('main'); // Navigate to 'Main' screen after 3 seconds
    }, 3000);

    return () => clearTimeout(navigationTimer);
  }, [navigation]);



  return (
    <View style={styles.container}>
      <View style = {styles.conteint}>
      <View style={styles.text}>
        <Animated.Text style={{ ...styles.label, opacity: opacity1 }}>
          {text[0]}
        </Animated.Text>
        <Animated.Text style={{ ...styles.label, opacity: opacity2 }}>
          {text[1]}
        </Animated.Text>
        <Animated.Text style={{ ...styles.label, opacity: opacity3 }}>
          {text[2]}
        </Animated.Text>
      </View>
      {/* Add the provided animation component below */}
      <View style = {{marginTop:50}}>
        <View style = {styles.boxContainer}>
      <Animated.View style={[styles.box, animatedStyles]}  />
      <Text style={{fontSize:20}}>Muscle Gain</Text>
      </View>
      <View style = {styles.boxContainer}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Text style={{fontSize:20}}>Setting Goal</Text>
      </View>
     
      </View>
     
    </View>
    <View style={{marginRight:50,marginTop:20}}>
      <Animated.View entering={SlideInDown} exiting={SlideOutUp} style={[styles.box, animatedStyles,{width:"100%"}]}/>
      <Animated.View entering={SlideInRight} exiting={SlideOutLeft} style={[styles.box, animatedStyles,{width:"100%"}]}/>
      <Animated.View entering={SlideInRight} exiting={SlideOutLeft} style={[styles.box, animatedStyles,{width:"100%"}]}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    height: '100%',
    justifyContent:"center",
  
 
  },
  conteint:{
    marginTop:50
  },
  text: {
    flexDirection: 'row',
    flexWrap:'wrap',
    marginHorizontal:20
  },
 textAlign:{
  alignSelf:'center',

 },

  label: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 8,
    
  },
  box: {
    height: 70,
    width: 70,
    backgroundColor: '#404040',
    borderRadius: 20,
    marginVertical: 20,

  },
  boxContainer:{
  
    flexDirection:'row',
    alignItems:'center',
    gap:60
  },
});
