import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import {selectUserDetails} from '../Redux/UserDetailsReducer';
const FeedbackList = () => {
  const [allFeedback, setAllFeedback] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);
  const userDetails = useSelector(selectUserDetails);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get('http://10.0.2.2:3000/api/feedback', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCurrentUser(response.data.userId);
        const currentUserFeedback = response.data.response.filter(item => item.userId == currentUser);
        const otherUserFeedback = response.data.response.filter(item => item.userId != currentUser);
       // Concatenate the current user's feedback with other users' feedback
      const allF = [...currentUserFeedback, ...otherUserFeedback];

      // Find the index of the current user's feedback in the array
     const currentUserIndex = allF.findIndex(item => item.userId === currentUser);

// If the current user's feedback is found and not already at the 0th index
if (currentUserIndex !== -1 && currentUserIndex !== 0) {
  // Remove the current user's feedback from its current position
  const currentUserData = allF.splice(currentUserIndex, 1)[0];
  // Add it back at the beginning of the array
  allF.unshift(currentUserData);
}
setAllFeedback(allF);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);


  const renderFeedbackItem = ({ item }) => (
    <View style={styles.feedbackItem}>
      <Pressable style={{ flex: 1, flexDirection: 'row',marginBottom:10 }}>
      {(item.userId === currentUser) && userDetails.profileImageUri ? <Avatar.Image
       source={{ uri: userDetails.profileImageUri}}
        size={55}
      />
        : <Avatar.Image size={55}  source={require('../../assets/3d-render-little-boy-with-eyeglasses-blue-shirt.jpg')}/>}
      <Text style={{ verticalAlign: 'middle', fontSize: 25,color:'black',padding:5 }}>{item.name}</Text>
      </Pressable>
      {  item.bugReport.length>0 && <>
      <Text style={styles.feedbackLabel}>Bug Report:</Text>
      <Text style={styles.feedbackText}>{item.bugReport}</Text>
      </>
      }

     { item.suggestions.length>0 && <><Text style={styles.feedbackLabel}>Suggestions:</Text>
      <Text style={styles.feedbackText}>{item.suggestions}</Text>
      </>}


    { item.usability.length>0 && <><Text style={styles.feedbackLabel}>Usability:</Text>
      <Text style={styles.feedbackText}>{item.usability}</Text>
      </>  }
      { item.features.length>0 && <>
      <Text style={styles.feedbackLabel}>Features:</Text>
      <Text style={styles.feedbackText}>{item.features}</Text>
      </>}
      { item.satisfaction.length >0 && <>
      <Text style={styles.feedbackLabel}>Satisfaction:</Text>
      <Text style={styles.feedbackText}>{item.satisfaction}</Text>
      </>}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://th.bing.com/th?id=OIP.l1M_efYy8mOnWVX-Mt_VKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' }} // Replace with your image URL
          style={styles.headerImage}
        />
        <Text style={styles.title}>Feedback Portal</Text>
        <Text style={styles.description}>Welcome to our Feedback Portal! Your opinions matter to us. Please provide your valuable feedback below.</Text>
        <Text style={styles.instructions}><Text style={styles.description}>Your input is invaluable! Share your thoughts with us to help shape the future of our products and services.</Text></Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" style={styles.loader} />
      ) : (
        <FlatList
          data={allFeedback}
          renderItem={renderFeedbackItem}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 14,
    color: '#666666',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flexGrow: 1,
  },
  feedbackItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  feedbackLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  feedbackText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666666',
  },
});

export default FeedbackList;
