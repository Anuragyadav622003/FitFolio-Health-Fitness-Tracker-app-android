import { View, Text, StyleSheet, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StoreCategory from './StoreCategory';
import AddToCart from './AddToCart';
import CustomCarousel from './CustomCarousel';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [CartData, setCartData] = useState({});

  const handleCart = (item) => {
    console.log(item);
    setCartData(item);
    setCartModalVisible(true);
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get('http://10.0.2.2:3000/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const CategoryData = [
    {
      title: 'Devices',
      img: 'https://store.healthifyme.com/cdn/shop/files/Category_Devices.png?v=1700815006'
    },
    {
      title: 'Kits & Combos',
      img: 'https://store.healthifyme.com/cdn/shop/files/Category_Kits.png?v=1700815006'
    },
    {
      title: 'Supplements',
      img: 'https://store.healthifyme.com/cdn/shop/files/Category_Supplements.png?v=1700815005'
    },
    {
      title: 'Foods',
      img: 'https://store.healthifyme.com/cdn/shop/files/Category_Foods.png?v=1700815005'
    },
    // Add more items as needed
  ];

  //carousel item
  const items = [
    { uri: 'https://store.healthifyme.com/cdn/shop/files/Treadmill_Offer_Web_4_1.png' },
    { uri: 'https://store.healthifyme.com/cdn/shop/files/Super_Savings_web_11ac2a38-89be-4d14-b310-0ca2ef4c0e89.jpg' },
    { uri: 'https://store.healthifyme.com/cdn/shop/files/Kitchen_Scale_Web_c3454ea3-4b1f-4d8b-9c01-f9b0c673c79f.png' },
    { uri: 'https://store.healthifyme.com/cdn/shop/files/CGM_with_Smart_Web.png?v=1707294140&width=1920' },
    { uri: 'https://store.healthifyme.com/cdn/shop/files/Foods_Web_New.jpg' },
  ];

  const handleCategorySelection = (category) => {
    setCategorySelected(category);
    setModalVisible(true);
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const categoryRender = (item, index) => (
    <Pressable key={index} style={styles.itemContainer} onPress={() => handleCategorySelection(item.title)} >
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );

  const ProductRender = (item, index) => (
    <Pressable key={index} style={styles.productContainer} onPress={() => handleCart(item)} >
      <View style={styles.cartContainer}>
        <Image source={{ uri: item.img }} style={styles.image} />
        <Text style={styles.productText} numberOfLines={1}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Rs. {item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
          <Text style={styles.oldPrice}>Rs. {item.expectedPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={{ width: "100%", height: 300, marginTop: 10 }}>
          <CustomCarousel items={items} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Shop By Category</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {CategoryData.map(categoryRender)}
            </View>
          </View>
          <View style={{ marginTop: 100 }}>
          <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Pressable style={styles.btn}>
        <Text style={styles.heading}> All Products</Text>
        </Pressable>
          <View style={styles.divider} />
          </View>
           
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {products.map(ProductRender)}
            </View>
          </View>
        </View>
        <StoreCategory
          visible={modalVisible}
          closeModal={() => setModalVisible(false)}
          filteredProducts={filteredProducts}
          categorySelected={categorySelected}
        />
        <AddToCart visible={cartModalVisible} onClose={() => setCartModalVisible(false)} item={CartData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cartContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    width: windowWidth / 2 - 25, // Adjust this width as needed for responsiveness
    marginBottom: 16,
  },
  productText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  header: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center'
  },
  itemContainer: {
    width: '50%',
    height: 180,
    alignItems: 'center',
    marginVertical: 20,
    padding: 10
  },
  productContainer: {
    width: windowWidth / 2 - 25, // Adjust this width as needed for responsiveness
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    flex: 1,

  },
  btn: {
   // backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    color:'black'
  },
});

export default Store;
