import {View, Text, Modal, StyleSheet, Pressable, Image, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const AddToCart = ({visible, onClose, item,closeParentModal}) => {
    const navigation = useNavigation();
    const [modalVisible,setModalVisible] = useState(false)
    const handleAddToCart = async ()=>{
      try { setModalVisible(true)
       const token  = await AsyncStorage.getItem('token');
  
      const response = await axios.post('http://10.0.2.2:3000/api/userCart', item,
      {
      headers:{
       Authorization:`Bearer ${token}`
      }
     });

      } catch (error) {
       console.log(error)
      }finally{

setInterval(()=>{
 setModalVisible(false)
},3000)
      }
   };
  return (

    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}>
      <View style={{flexDirection:'row',marginTop:20,paddingHorizontal:10}}>
        <Pressable onPress={onClose} style = {{paddingRight:20}}><Icon name='chevron-back'size={30} color='black' /></Pressable>
        <Pressable style={{paddingHorizontal:2}}
         onPress={()=>{
          onClose();
          if(closeParentModal)
          {
          closeParentModal();
          }
          navigation.navigate('MyCart');
        }}
         >
          <Icon name='cart' color = "black" size={30} />
           
        </Pressable>
       
        <Text style={{color:'black', fontWeight:'400',fontSize:25,textAlign:'center',paddingHorizontal:10}}>/</Text>
        <Pressable style={{paddingHorizontal:10}}>
          <Text numberOfLines={1} style={{color:'black', fontWeight:'400',fontSize:20,textAlign:'center'}}>{item.name}</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>{item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable style={{flexDirection: 'row', marginTop: 10}}>
            <Text numberOfLines={1} style={styles.dis}>
              Rs. {item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
            <Text numberOfLines={1} style={styles.oldPrice}>
              Rs.{' '}
              {item.expectedPrice
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                paddingHorizontal: 16,
                paddingVertical: 10,
                fontWeight: 'bold',
              }}>
              {Math.floor(
                ((item.expectedPrice - item.price) * 100) / item.expectedPrice,
              )}
              % OFF
            </Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
        <Image source={{uri: item.img}} style={styles.image} />
        {modalVisible && (
              <ActivityIndicator
                style={styles.activityIndicator}
                animating={modalVisible}
                color="orange"
                size={60}
              />
            )}
        </View>
      
        <Pressable style={styles.btn} onPress={handleAddToCart}>
  <Icon name='cart' color = "white" size={22} />
  <Text style={styles.btnText}>ADD To CART</Text>
</Pressable>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  activityIndicator: {
    position: 'absolute',
    top: '25%', // Adjust this value to properly position the ActivityIndicator on the image
    left: '45%', // Adjust this value to properly position the ActivityIndicator on the image
    zIndex: 1,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    paddingLeft: 5,
    color: 'gray',
    paddingTop: 8,
  },

  dis: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: '50%',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#009658',
    borderRadius: 10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
 gap:10
  
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddToCart;
