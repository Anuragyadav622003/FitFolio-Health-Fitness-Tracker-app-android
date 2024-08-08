import {
    Alert,
    View,
    Text,
    StyleSheet,
    Modal,
    Pressable,
                          
    StatusBar,
    Image,
    Platform,
  } from 'react-native';
  import React, { useState} from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import { Checkbox} from 'react-native-paper'; // Remove useTheme import
  import Icon from 'react-native-vector-icons/AntDesign';
  import axios from 'axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';
 import {    TextInput} from 'react-native-paper'
import { DialogBox,Loader } from './LoginMessage';


  const LoginScreen = () => {
  //password
  const [loginPasswordVisibility, setLoginPasswordVisibility] = useState(true);
  const [registerPasswordVisibility,setRegisterPasswordVisibility] = useState(true);

    const [visible, setVisible] = useState(false);
    const [loginModal, setShowLoginModal] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
  const showLoginModal = ()=>setShowLoginModal(!loginModal);
    //user register
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  //dialogbox and loader
    const [loaderVisible,setLoaderVisible] = useState(false);
  const [DialogBoxVissible,setDialogBoxVisible] = useState(false);
  //status 
  const[status,setStatus] = useState('');
    const handleSubmit = async () => {
    
      try {
        setLoaderVisible(true);
        const deviceToken = await AsyncStorage.getItem('device_token')
        const userData = {name, email, password,deviceToken};
        const response = await axios.post(
          'http://10.0.2.2:3000/api/register',
          userData,
        );
      
        if(response.status === 201)
        {
       
           // Extract token from response
           const { token, userId } = response.data;
       
                   // Save token and userId to AsyncStorage for future use
                   await AsyncStorage.setItem('token', token);
                   await AsyncStorage.setItem('userId', userId);
                   await AsyncStorage.setItem('email',email);
            setStatus("Register successfully")
            //reduxStore
         
        }
      
      } catch (error) {
        console.error('Error registering:', error);
        setStatus('Invalid email or password. Please try again.')
      }finally{
        setEmail('');
        setName('');
        setPassword('');
        setLoaderVisible(false)
        setDialogBoxVisible(true);
      }
    };
    const handleLogin = async () => {
      try {
        setLoaderVisible(true);
        const deviceToken = await AsyncStorage.getItem('device_token')
     
        const userData = { email, password,deviceToken };
        const response = await axios.post('http://10.0.2.2:3000/api/login', userData);
         if (response.status === 200) {
          const { token, userId } = response.data;

                   // Save token and userId to AsyncStorage for future use
                   await AsyncStorage.setItem('token', token);
                   await AsyncStorage.setItem('userId', userId);
                   await AsyncStorage.setItem('email',email);
    
          setStatus("Login successful!");
          
    
         }
         else{
          setStatus('An unexpected error occurred. Please try again later.');
         }
          
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setStatus('Invalid email or password. Please try again.');
        } else {
          console.error('Error during login:', error);
          setStatus('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setEmail('');
        setName('');
        setPassword('');
        // Hide loader
        setLoaderVisible(false);
        // Show dialog box
        setDialogBoxVisible(true);
      }
    };
    
    
    return (
      <SafeAreaView style={[styles.SafeAreaView]}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />
        <Pressable style={{alignItems:'flex-end'}} onPress={showLoginModal}><Text style={{padding:10,color:"#FFFFFF"}}>Already a use?</Text></Pressable>
        <View style={styles.container}>
          <View style={{height: '40%'}}>
            <Text style={[styles.Headertext]}>FitFolio</Text>
          </View>
          <Text style={[styles.text, {paddingTop: 10}]}>
            Your complete guide to nutrition,
          </Text>
          <Text style={[styles.text, {paddingTop: 0}]}>health and fitness</Text>
          <Pressable
            onPress={showModal}
            style={[
              styles.button,
              {backgroundColor: '#2196F3', marginTop: 20}, // Use custom color
            ]}>
            <Text style={[styles.text, {padding: 10}]}>Get Started</Text>
          </Pressable>        
          <Modal
            animationType="slide"
            visible={loginModal}
            transparent={false}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              showModal();
            }}>
              
            <View style={{backgroundColor: '#121212', flex: 1}}>
           <Loader visible = {loaderVisible} setLoaderVisible ={setLoaderVisible} />
          <DialogBox visible = {DialogBoxVissible} setDialogBoxVisible = {setDialogBoxVisible} status = {status} setStatus = {setStatus}/>
              <View
                style={{
                  alignItems: 'center',
                  height: '25%',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={[
                    {
                      color: '#FFFFFF',
                      fontSize: 35,
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                    },
                  ]}>
                  FitFolio
                </Text>
              </View>
            
              <View style={[styles.modalContent]}>
               
                <Pressable onPress={showLoginModal} style={{alignItems: 'center'}}>
                  <Icon name="caretdown" color="black" size={30} />
                </Pressable>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: 30,
                      padding: 20,
                    }}>
                  Login
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text.trim())}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry={loginPasswordVisibility}
                    value={password}
                    right={<TextInput.Icon icon={ loginPasswordVisibility ? "eye":'eye-off'} onPress={()=>setLoginPasswordVisibility(!loginPasswordVisibility)} />}
                    onChangeText={text => setPassword(text.trim())}
                  />
                </View>
                <View style={{alignItems: 'center'}}>
                  <Pressable style={{flexDirection: 'row'}}>
                    <Checkbox
                      color="#39e600"
                      status={isChecked ? 'checked' : 'unchecked'}
                      onPress={() => setChecked(!isChecked)}
                    />
                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 15,
                        color: 'black',
                        paddingTop: 7,
                        paddingRight: 5,
                      }}>
                      By signing up, I agree to Terms of Service and privacy
                      policy, inclding usage of Cookies
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={handleLogin}
                    style={[
                      styles.button,
                      {backgroundColor: '#2196F3', marginTop: 20}, // Use custom color
                    ]}>
                    <Text style={[styles.text, {padding: 10}]}>Sign in</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 20,
                  }}>
                  <Pressable style={styles.avatar}>
                    <Image
                      source={require('../assets/google.png')}
                      alt="#"
                      style={styles.avatar_image}
                    />
                  </Pressable>
                  <Pressable style={styles.avatar}>
                    <Image
                      source={require('../assets/facebook.png')}
                      alt="#"
                      style={[styles.avatar_image, {height: 40, width: 43}]}
                    />
                  </Pressable>
                  <Pressable style={styles.avatar}>
                    <Image
                      source={require('../assets/Email.png')}
                      alt="#"
                      style={[styles.avatar_image, {height: 40, width: 43}]}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            visible={visible}
            transparent={false}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              showModal();
            }}>
            <View style={{backgroundColor: '#121212', flex: 1}}>
            <Loader visible = {loaderVisible} setLoaderVisible ={setLoaderVisible} />
          <DialogBox visible = {DialogBoxVissible} setDialogBoxVisible = {setDialogBoxVisible} status = {status} setStatus = {setStatus}/>
              <View
                style={{
                  alignItems: 'center',
                  height: '25%',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={[
                    {
                      color: '#FFFFFF',
                      fontSize: 35,
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                    },
                  ]}>
                  Healthify
                </Text>
              </View>
              <View style={[styles.modalContent]}>
                <Pressable onPress={hideModal} style={{alignItems: 'center'}}>
                  <Icon name="caretdown" color="black" size={30} />
                </Pressable>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: 30,
                      padding: 20,
                    }}>
                    Create your account
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="gray"
                    keyboardType="default"
                    value={name}
                    onChangeText={text => setName(text.trim())}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text.trim())}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry={registerPasswordVisibility}
                    value={password}
                    right={<TextInput.Icon icon={ registerPasswordVisibility ? "eye":'eye-off'} onPress={()=>setRegisterPasswordVisibility(!registerPasswordVisibility)} />}
                    onChangeText={text => setPassword(text.trim())}
                  />
                </View>
                <View style={{alignItems: 'center'}}>
                  <Pressable style={{flexDirection: 'row'}}>
                    <Checkbox
                      color="#39e600"
                      status={isChecked ? 'checked' : 'unchecked'}
                      onPress={() => setChecked(!isChecked)}
                    />
                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 15,
                        color: 'black',
                        paddingTop: 7,
                        paddingRight: 5,
                      }}>
                      By signing up, I agree to Terms of Service and privacy
                      policy, inclding usage of Cookies
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={handleSubmit}
                    style={[
                      styles.button,
                      {backgroundColor: '#2196F3', marginTop: 20}, // Use custom color
                    ]}>
                    <Text style={[styles.text, {padding: 10}]}>Sign up</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 20,
                  }}>
                  <Pressable style={styles.avatar}>
                    <Image
                      source={require('../assets/google.png')}
                      alt="#"
                      style={styles.avatar_image}
                    />
                  </Pressable>
                  <Pressable style={styles.avatar}>
                    <Image
                      source={require('../assets/facebook.png')}
                      alt="#"
                      style={[styles.avatar_image, {height: 40, width: 43}]}
                    />
                  </Pressable>
                  <Pressable style={styles.avatar}>
                    <Image
                      source={require('../assets/Email.png')}
                      alt="#"
                      style={[styles.avatar_image, {height: 40, width: 43}]}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    SafeAreaView: {
      flex: 1,
      backgroundColor: '#121212',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    Headertext: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#FFFFFF',
      paddingVertical: 100, // Adjust font size as needed
    },
    text: {
      fontSize: 24,
      color: '#FFFFFF',
      fontWeight: '500',
    },
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
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      elevation: 3,
    },
    modalContent: {
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '80%',
      backgroundColor: '#FFFFFF',
    },
    input: {
      height: 50,
      margin: 12,
      borderBottomWidth: 1,
      color: 'black',
      fontSize: 20,
    },
    avatar: {
      width: 70,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      // Shadow styles for iOS
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.4,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    avatar_image: {
      width: 50,
      height: 50,
      padding: 20,
    },
  });
  export default LoginScreen;
  