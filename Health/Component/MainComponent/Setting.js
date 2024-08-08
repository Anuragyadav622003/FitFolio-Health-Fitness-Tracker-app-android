import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {  useDispatch } from 'react-redux';
import { clearToken } from '../Redux/authSlice';
import { clearUserDetails } from '../Redux/UserDetailsReducer';
const Setting = () => {
  const navigation =  useNavigation();
  const dispatch = useDispatch();
  const data = [
    {
      component: (
        <Pressable style={{flexDirection: 'row'}} onPress ={()=>navigation.navigate('profile')}>
          <AntDesign name="profile" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Profile
          </Text>
        </Pressable>
      ),
    },

    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <Icon name="alert-circle-outline" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            About Us
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}} onPress = {async()=>{
         dispatch(clearToken());
         dispatch(clearUserDetails())
         await AsyncStorage.clear();
           navigation.navigate('splash');
        }}>
          <Icon name="logout" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Log Out
          </Text>
        </Pressable>
      ),
    },
  ];
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          {data.map((item, index) => (
            <View key={index} style={styles.cardItem}>
              {item.component}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  cardItem: {
    height: 70,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#3d5c5c',
  },
});
export default Setting;
