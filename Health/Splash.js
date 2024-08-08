import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window'); // Get the width of the screen

  useEffect(() => {
    const checkToken = async () => {
      try {
        const asyncStorageToken = await AsyncStorage.getItem('token');
console.log(asyncStorageToken,'user token')
        if (asyncStorageToken) {
          navigation.replace('main');
        } else {
          navigation.replace('home');
        }
      } catch (error) {
        console.error('Error checking token:', error);
        navigation.replace('home');
      }
    };

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Reduce animation duration for better performance
      useNativeDriver: true,
    }).start(() => {
      checkToken();
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require('./assets/logo.png')}
          style={[styles.logo, { width: width * 0.5 }]} // Set width based on screen width
          resizeMode="contain"
        />
        <Text style={[styles.appName, { fontSize: width * 0.07, marginTop: width * 0.08 }]}>Your FitFolio</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    height: undefined,
    aspectRatio: 1,
  },
  appName: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default Splash;
