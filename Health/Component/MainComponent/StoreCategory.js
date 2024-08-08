import {View, Text, Modal, ScrollView, Image, StyleSheet, Pressable} from 'react-native';
import React,{useState} from 'react';
import AddToCart from './AddToCart';

const StoreCategory = ({visible, closeModal, filteredProducts,  categorySelected}) => {
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const[CartData,setCartData] = useState({});
  const handleCart = (item)=>{
     console.log(item)
     setCartData(item)
     setCartModalVisible(true);
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}>
      <ScrollView>
       
        <View style={styles.container}>
        <Text style={styles.header}>{categorySelected}</Text>
          {filteredProducts.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Pressable onPress={() => handleCart(item)}>
              <Image source={{uri: item.img}} style={styles.image} />
              </Pressable>
              <Text numberOfLines={1} style= {styles.text}>{item.name}</Text>
              <Pressable style={{flexDirection:'row',marginTop:10}}>
                <Text numberOfLines={1} style={styles.dis}> &#8377;{item.price}</Text>
                <Text numberOfLines={1} style={styles.oldPrice}> &#8377;{item.expectedPrice}</Text>
              </Pressable>
              <Pressable style={{backgroundColor:'#12485b',alignItems:'center',height:32,justifyContent:'center',width:80,borderRadius:5,marginTop:10}}>
                <Text style={styles.btnText}>{Math.floor((item.expectedPrice - item.price)*100/item.expectedPrice)}% OFF</Text>
              </Pressable>
            </View>
          ))}
        </View>
        <AddToCart visible = {cartModalVisible} onClose = {()=>setCartModalVisible(false)} closeParentModal={closeModal} item = {CartData}/>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
  },
  header:{
    fontSize:24,
    textAlign:'center',
    color:'black',
    fontWeight:'700',
    marginTop:20,
    textDecorationLine: 'underline'
   
  },
  image: {
    width: '100%', // Take full width of item container
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
 
  },
  oldPrice:{
    textDecorationLine: 'line-through',
    fontSize:18,
 paddingLeft:5,
 color:'red'
  },
 
  dis: {
    fontWeight: 'bold',
    fontSize:24,
    color:'black' 
  },
  btnText:{
    fontSize:16,
    color:'#FFFFFF',
    fontWeight:'900',
  },
  itemContainer:{
    marginTop:100 // Adjust as needed
  },text:{
    fontSize:24,
    color:'black',
    fontWeight: 'bold',
    marginTop:10
  }
});

export default StoreCategory;
