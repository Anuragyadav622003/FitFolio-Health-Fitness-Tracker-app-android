import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    bugReport: '',
    suggestions: '',
    usability: '',
    features: '',
    satisfaction: '',
  });

  const handleInputChange = (field, value) => {
    setFeedback({ ...feedback, [field]: value });
  };

  const submitFeedback = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      await axios.post('http://10.0.2.2:3000/api/feedback', feedback, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
 
      Alert.alert('Thank you!', 'Your feedback has been submitted.');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      Alert.alert('Error', 'Failed to submit feedback. Please try again later.');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Image
         source={{ uri: 'https://th.bing.com/th?id=OIP.l1M_efYy8mOnWVX-Mt_VKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' }} // Replace with your image URL
          style={styles.headerImage}
        />
        <Text style={[styles.heading, { fontSize: 28 }]}>FitFolio Feedback</Text>
        <Text style={styles.description}>Your feedback helps us improve our products and services. Please provide your valuable feedback below.</Text>
      </View>
      <TextInput
        style={[styles.input, { fontSize: 16 }]}
        placeholder="Bug Report"
        onChangeText={text => handleInputChange('bugReport', text)}
        multiline={true}
      />
      <TextInput
        style={[styles.input, { fontSize: 16 }]}
        placeholder="Suggestions"
        onChangeText={text => handleInputChange('suggestions', text)}
        multiline={true}
      />
      <TextInput
        style={[styles.input, { fontSize: 16 }]}
        placeholder="Usability"
        onChangeText={text => handleInputChange('usability', text)}
        multiline={true}
      />
      <TextInput
        style={[styles.input, { fontSize: 16 }]}
        placeholder="Features"
        onChangeText={text => handleInputChange('features', text)}
        multiline={true}
      />
      <TextInput
        style={[styles.input, { fontSize: 16 }]}
        placeholder="Overall Satisfaction"
        onChangeText={text => handleInputChange('satisfaction', text)}
        multiline={true}
      />
      <TouchableOpacity style={styles.button} onPress={submitFeedback}>
        <Text style={[styles.buttonText, { fontSize: 20 }]}>Submit</Text>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  input: {
    width: windowWidth - 40,
    height: windowHeight * 0.1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: windowWidth - 40,
    alignItems: 'center',
    marginBottom:20

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default FeedbackForm;
