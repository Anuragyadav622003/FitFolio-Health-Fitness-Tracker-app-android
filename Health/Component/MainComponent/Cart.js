import React,{useState,useEffect} from 'react';
import { View, Text, Modal, Image, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetchData();
 }, []);

 const fetchData = async () => {
   try {
       const token = await AsyncStorage.getItem('token');

       const response = await axios.get('http://10.0.2.2:3000/api/userCart', {
           headers: {
               Authorization: `Bearer ${token}`,
           },
         
       });

     
      setCartData(response.data); // Assuming setTasks is a state setter function
   } catch (error) {
       console.error('Error fetching tasks:', error);
   }
};
const handleDeleteItem = async (itemId) => {
  try {
    const token  = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    await axios.delete(`http://10.0.2.2:3000/api/userCart/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
    },
    params: {
        userId: userId
    }
    });
    // After successful deletion, refetch the data
    fetchData();
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};
return (
  <View style={styles.container}>

    <ScrollView>
        {cartData.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name} numberOfLines={4}>{item.name}</Text>
              <Text style={styles.price}>Price: &#8377;{item.price}</Text>
              {item.discountPercentage ? (
                <>
                  <Text style={styles.discountPrice}>
                    Discount Price: ${item.discountPrice}
                  </Text>
                  <Text style={styles.discountPercentage}>
                    Discount Percentage: {item.discountPercentage}%
                  </Text>
                </>
              ) : null}
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              <TouchableOpacity onPress={() => handleDeleteItem(item._id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  image: {
    width: '50%', // Image takes 50% width
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    flex: 1,
   
    // Set to flex: 1 so that it takes the remaining space
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  price: {
    marginBottom: 5,
    color:'black',
    fontWeight:'600',
    fontSize:16
  },
  discountPrice: {
    marginBottom: 5,
    color: 'red',
  
  },
  discountPercentage: {
    marginBottom: 5,
    color: 'green',
  },
  quantity: {
    marginBottom: 5,
    color:'black',
    fontSize:16,
    fontWeight:'600'
  },
  closeButton: {
    backgroundColor: 'blue',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Cart;
