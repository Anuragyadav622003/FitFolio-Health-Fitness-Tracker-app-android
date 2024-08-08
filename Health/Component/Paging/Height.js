import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const Height = ({ value, onChange }) => {
  const { width } = Dimensions.get('window');
  const isSmallDevice = width < 375; // Adjust as needed

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { fontSize: isSmallDevice ? 25 : 28 }]}>How tall are you?</Text>
      <Text style={[styles.label, { fontSize: isSmallDevice ? 18 : 22  }]}>Your height will help us to calculate important body stats to help you reach your goals faster.</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Enter your height in cm"
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
    backgroundColor: '#FFFFFF',
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

export default Height;
