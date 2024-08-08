import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BiologicalSex = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = async (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  const getCardStyle = (option) => {
    return {
      ...styles.card,
      borderColor: selectedOption === option ? '#39e600' : '#000',
      width: Dimensions.get('window').width * 0.4, // Adjust card width based on screen width
      height: Dimensions.get('window').width * 0.4, // Adjust card height based on screen width
    };
  };

  const getIconSize = () => {
    return Dimensions.get('window').width * 0.15; // Adjust icon size based on screen width
  };

  const getIconContainerSize = () => {
    return Dimensions.get('window').width * 0.25; // Adjust icon container size based on screen width
  };

  return (
    <View>
      <Text style={styles.heading}>What's your biological sex?</Text>
      <Text style={styles.label}>
        We support all forms of gender expression. However, we need this to
        calculate your body metrics.
      </Text>
      <View style={styles.cardContainer}>
        <Pressable
          style={getCardStyle('male')}
          onPress={() => handleOptionSelect('male')}
        >
          <View style={[styles.iconContainer, { width: getIconContainerSize(), height: getIconContainerSize() }]}>
            <Icon name="male" size={getIconSize()} color={selectedOption === 'male' ? '#FFF' : '#000'} />
          </View>
          <Text style={styles.title}>Male</Text>
        </Pressable>
        <Pressable
          style={getCardStyle('female')}
          onPress={() => handleOptionSelect('female')}>
          <View style={[styles.iconContainer, { width: getIconContainerSize(), height: getIconContainerSize() }]}>
            <Icon name="female" size={getIconSize()} color={selectedOption === 'female' ? '#FFF' : '#000'} />
          </View>
          <Text style={styles.title}>Female</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    marginBottom: 5,
    color: 'black',
    fontWeight: '600',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    paddingVertical: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.02, // Adjust horizontal padding based on screen width
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    padding: 10,
  },
  iconContainer: {
    backgroundColor: '#DCE0E3',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop:15
  },
});

export default BiologicalSex;
