import {View, Text, SafeAreaView, StyleSheet, FlatList,Image,Pressable,StatusBar} from 'react-native';
import React,{useEffect, useState} from 'react';
import {useTheme,Card, Title, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation()
// useEffect(()=>{ 
// try {
//   async function findToken(){
//      const token = await AsyncStorage.getItem('token');

//      if(token)
//      {
//       navigation.navigate('main');
//      }
     
//   }
//   findToken();
// } catch (error) {
  
//   console.log(error)
// }
// },[]);
  const [selectedCards, setSelectedCards] = useState([]);
  const handleCardPress = (index) => {
    const isSelected = selectedCards.includes(index);

    if (isSelected) {
      setSelectedCards(selectedCards.filter((item) => item !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };
  const data = [
    {

      title: 'COCH GUIDANCE',
      img: require('../assets/coach.png')
    },
    {

      title: 'DIET PLAN',
      img: require('../assets/diet-plan.png')
    },
    {

      title: 'WEIGHT LOSS',
      img:require('../assets/weight-scale.png')
    },
    {

      title: 'MUSCLES GAIN',
      img: require('../assets/biceps.png')
    },
    {

      title: 'COUNT CALORIES',
      img:require('../assets/healthy-food.png')
    },
    {

      title: 'WORKOUTS and YOGA',
      img: require('../assets/yoga-pose.png')
    }, 
    // Add more items as needed
  ];
  const renderItem = ({ item, index }) => {
    const isSelected = selectedCards.includes(index);
    return (
      <Card
        key={index}
        style={[
          styles.card,
          { borderColor: isSelected ? '#39e600' : 'gray' },
        ]}
        onPress={() => handleCardPress(index)} // Moved onPress to the Card component
      >
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isSelected ? 'checked' : 'unchecked'}
            color='#39e600'
          />
        </View>
        <Image style={styles.cardImage} source={item.img} alt='#'/>
        <Card.Content>
          <Title numberOfLines={1} style={{fontSize:17,textAlign:'center', paddingTop:10,fontWeight:'700',color:'#000'}}>{item.title}</Title>
        </Card.Content>
      </Card>
    );
  };
  

  return (
    <SafeAreaView
      style={[styles.SafeAreaView]}>
          <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={[styles.container]}>
        <View style={{height:"10%"}}>
        <Text style={[styles.Headertext]}>
         Healthify
        </Text>
        </View>
        <Text style={[styles.text, {paddingTop:20,padding:10}]}>What bring you to helthifyMe</Text>
      
        <FlatList  data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          style={{ height: '83%', backgroundColor: 'white' }}
       />
        <View  style={{height:'7%'}}>
         {selectedCards.length !== 0 && <Pressable  onPress={()=>navigation.navigate('login')}>
            <Text  style={[styles.text,{paddingTop:10}]}>Proceed</Text>
          </Pressable>} 
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#121212'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:100
  },
  Headertext: {
    fontSize: 35,
    fontWeight:'bold',
    color:'#FFFFFF' // Adjust font size as needed
  },
  text:{
    fontSize:24,
    fontWeight:'500',
    color:'white'
   
  },
  card: {
    marginVertical: 10,
    width: '45%', // Adjust the width as needed, considering margin and padding
    marginHorizontal: '2.5%', // Adjust the margin between cards to achieve equal space
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    padding: 5,
    backgroundColor:'white'
  },
  cardImage:{
width:50,
height:50,
alignSelf:'center'
  },
  checkboxContainer: {
    flexDirection: 'row', justifyContent: 'flex-end', width: '100%'
  },
});

export default Home;
