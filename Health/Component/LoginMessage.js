import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Loader = ({ visible,setLoaderVisible }) => {
  // useEffect(() => {
  //   const myTimeoutFunction = () => {
  //     setLoaderVisible(false);
  //   };

  //   // Set the timeout (2000 milliseconds = 2 seconds)
  //   const timeoutId = setTimeout(myTimeoutFunction, 3000);

  //   // Cleanup function to clear the timeout when the component is unmounted
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [visible]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setLoaderVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row' }}>
              <ActivityIndicator size="large" />
              <Text style={styles.modalText}>Please wait!</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const DialogBox = ({ visible, setDialogBoxVisible, status, setStatus }) => {
  const navigation = useNavigation();
  useEffect(() => {
    const myTimeoutFunction = () => {
      setDialogBoxVisible(false);
      if (status === 'Login successful!' || status === "Register successfully") {
        setStatus('');
        navigation.navigate('paging');
      }
    };

    // Set the timeout (2000 milliseconds = 2 seconds)
    const timeoutId = setTimeout(myTimeoutFunction, 3000);

    // Cleanup function to clear the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDialogBoxVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {status === 'Login successful!'|| status === "Register successfully" ? (
              <>
                <Icon name="check-circle" size={60} color="green" />
                <Text
                  style={[
                    styles.modalText,
                    { color: 'green', fontSize: 20 },
                  ]}>
                  {status}
                </Text>
              </>
            ) : (
              <>
                <Icon name="alert-triangle" size={60} color="red" />
                <Text
                  style={[
                    styles.modalText,
                    { color: 'red', fontSize: 20 },
                  ]}>
                  {status}
                </Text>
              </>
            )}

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
  },
});

export { Loader, DialogBox };
