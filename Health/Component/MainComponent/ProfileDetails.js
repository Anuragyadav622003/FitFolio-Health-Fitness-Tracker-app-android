
import React, {useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView,ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../Redux/UserDetailsReducer';

export const BasicInfo = ({ onClose, details, setDetails }) => {
const dispatch = useDispatch();
const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (value, fieldName) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value,
    }));
   
  };
  const handleSubmit =  () => {
    setIsLoading(true); // Show activity indicator
    try {
      // Dispatch an action to update user details
      dispatch(setUserDetails(details));
     
    } catch (error) {
      // Handle error here
      console.error('Error submitting user details:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
    
      {isLoading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size={50} color="#0000ff" />
        </View>
      )}
    
        <View style={styles.headContainer}>
          <FontAwesome5
            name="arrow-left"
            size={22}
            color="black"
            onPress={onClose}
          />
          <Text style={styles.heading}>Basic Information </Text>
          <Pressable onPress={()=>handleSubmit()}>
            <Text style={styles.done}>Done</Text>
          </Pressable>
        </View>

        <View style={styles.headContainer}>
          <FontAwesome5 name="user-alt" color="blue" size={24} />
          <TextInput
            label="Name"
            style={styles.textInput}
            value={details.name}
            keyboardType="default"
            onChangeText={text => handleInputChange(text, 'name')}
          />
        </View>

        <View style={styles.headContainer}>
          <FontAwesome5 name="birthday-cake" size={35} color="orange"  />
          <TextInput
            label="Age (years)"
            value={details.age}
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={text => handleInputChange(text, 'age')}
       
          />
        </View>

        <View style={styles.headContainer}>
          <FontAwesome5 name="ruler" color="blue" size={30} />
          <TextInput
            label="Height (cm)"
            value={details.height}
            style={styles.textInput}
            keyboardType="decimal-pad"
            onChangeText={text => handleInputChange(text, 'height')}
          />
        </View>

        <View style={styles.headContainer}>
          <FontAwesome5 name="weight" color="orange" size={35} />
          <TextInput
            label="Current Weight(kg)"
            value={details.weight}
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={text => handleInputChange(text, 'weight')}
          />
        </View>

        <View style={styles.headContainer}>
          <FontAwesome5 name="heartbeat" color="red" size={35} />
          <TextInput
            label="BMI"
            value={parseInt(details.height) !== 0 ? Math.round(details.weight*10000/details.height**2)+'':'0'}
            style={styles.textInput}
            
          />
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  heading: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500',
  },
  done: {
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    fontSize: 20,
    padding: 10,
    marginLeft: 10,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    
  },
});

