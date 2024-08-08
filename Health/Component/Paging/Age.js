import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const Age = ({ value, onChange }) => {
  const { width } = Dimensions.get('window');
  const isSmallDevice = width < 375; // Adjust as needed

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { fontSize: isSmallDevice ? 25:28 }]}>What's your Age?</Text>
      <Text style={[styles.label, { fontSize: isSmallDevice ? 18 : 22 }]}>Your age determines how much you should consume. (Select your age in years)</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Enter your age"
        placeholderTextColor="#A9A9A9"
        value={value}
        onChangeText={onChange}
        style={[styles.input, { fontSize: isSmallDevice ? 18 : 22  }]}
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
    color:'gray'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    color:'black'
  },
});

export default Age;
