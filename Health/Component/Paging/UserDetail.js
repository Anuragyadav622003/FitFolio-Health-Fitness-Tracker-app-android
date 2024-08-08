import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Age from './Age';
import Height from './Height';
import Weight from './Weight';
import BiologicalSex from './BiologicalSex';
import { ProgressBar } from 'react-native-paper';
import Name from './Name';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../Redux/UserDetailsReducer';

const UserDetail = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    name: '',
    gender: '',
  });

  useEffect(() => {
    // Dispatch setUserDetails action whenever formData changes
    dispatch(setUserDetails(formData));
  }, [formData, dispatch]);

  const pages = [
    <Name value={formData.name} onChange={value => handleInputChange(value, 'name')} />,
    <BiologicalSex onChange={value => handleOptionSelect(value, 'gender')} />,
    <Age value={formData.age} onChange={value => handleInputChange(value, 'age')} />,
    <Height value={formData.height} onChange={value => handleInputChange(value, 'height')} />,
    <Weight value={formData.weight} onChange={value => handleInputChange(value, 'weight')} />,
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('animation');
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleInputChange = (value, fieldName) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleOptionSelect = (value, fieldName) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ProgressBar progress={0.2 * currentPage + 0.2} color="black" />
        {pages[currentPage]}
      </View>

      <View style={styles.tabBar}>
        <Pressable
          style={styles.buttonContainer}
          onPress={prevPage}
          disabled={currentPage === 0}>
          <Icon name="chevron-left" size={Dimensions.get('window').width * 0.06} color="black" />
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={nextPage}>
          <Text style={styles.buttonText}>Next</Text>
          <Icon name="chevron-right" size={Dimensions.get('window').width * 0.06} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: Dimensions.get('window').width * 0.05,
  },
  inputContainer: {
    marginBottom: Dimensions.get('window').height * 0.03,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#FFFFFF',
    paddingVertical: Dimensions.get('window').height * 0.02,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.045,
    paddingTop: 0,
    fontWeight: '700',
  },
});

export default UserDetail;
