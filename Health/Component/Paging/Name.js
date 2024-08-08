import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const Name = ({ value, onChange }) => {
  const { width } = Dimensions.get('window');
  const isSmallDevice = width < 375; // Adjust as needed

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { fontSize: isSmallDevice ? 25 : 28 }]}>Hey there!</Text>
      <Text style={[styles.label, { fontSize: isSmallDevice ? 16 : 20 }]}>Your name will help us to personalize your experience and better assist you in reaching your goals.</Text>
      <Text style={[styles.heading, { fontSize: isSmallDevice ? 24 : 26 }]}>What is your name?</Text>
      <TextInput
        keyboardType="default"
        placeholder="Enter Your Name"
        value={value}
        placeholderTextColor="#A9A9A9"
        onChangeText={onChange}
        style={[styles.input, { fontSize: isSmallDevice ? 18 : 22 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor:'#FFFFFF',
  },
  heading: {
    marginBottom: 5,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  label: {
    paddingVertical: 10,
    textAlign: 'center',
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginTop: 10,
    color: 'black',
  },
});

export default Name;
