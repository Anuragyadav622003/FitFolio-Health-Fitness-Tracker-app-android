import * as React from 'react';
import { useState } from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const data = [
  {
    uri: 'https://th.bing.com/th/id/OIP._1HVcZ8g59QwM0lZruMkbAHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'Benifit of turmeric',
    content: 'Turmeric, with its potent anti-inflammatory and antioxidant properties, supports joint health, heart function, and may even aid in cancer prevention. Its versatility extends to skincare, promoting a glowing complexion. Incorporate this golden spice into your diet for overall well-being, but consult a professional for personalized advice',
  },
  {
    uri: 'https://th.bing.com/th/id/OIP.n26ZAEjHak1nzrvd632V5QHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'A Journey through Yoga',
    content: 'Yoga offers holistic benefits, enhancing flexibility, strength, and mental well-being through mindful movement and breathwork. It reduces stress, improves posture, and fosters inner peace. Regular practice cultivates harmony between body and mind, promoting overall health and vitality.',
  },
  {
    uri: 'https://th.bing.com/th/id/OIP.Li4sk8UBQBgVJb9O6g9YOAHaD4?w=303&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    title: 'Elevate Your Strength and Stamina',
    content: 'Gym workouts provide a diverse range of exercises to build strength, improve cardiovascular health, and enhance overall fitness. With access to equipment and professional guidance, gym-goers can customize workouts to achieve their specific goals, whether it\'s muscle gain, weight loss, or endurance training',
  },
  {
    uri: 'https://img.freepik.com/free-psd/flat-design-healthy-food-banner-template_23-2149224549.jpg?size=626&ext=jpg',
    title: 'Nourish Your Body, Energize Your Mind',
    content: 'In the realm of health and wellness, understanding the role of diet and nutrients is paramount. Proper nutrition not only fuels our bodies but also influences our overall well-being and longevity. This guide aims to provide a comprehensive overview of diet and nutrient requirements, offering valuable insights into creating a balanced and sustainable approach to eating.',
  },
];
const Blogs = () => {
    const [selectedHeart,setSelectedHeart] = useState([]);
    const handleSelectedHeart = (index)=>{
     const isSelectedHeart =   selectedHeart.includes(index);
     if (isSelectedHeart) {
        setSelectedHeart(selectedHeart.filter((item) => item !== index));
      } else {
        setSelectedHeart([...selectedHeart, index]);
      }
    }
  const MyComponent = (item, index) => {
    const isSelected = selectedHeart.includes(index);
    return (
    <Card key={index} style={styles.CardContainer}>
      <Card.Title title="Health Tracker" left={LeftContent} />

      <Card.Cover source={{uri: item.uri}} />
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium">{item.content}</Text>
      </Card.Content>
      <Card.Actions>
        <Pressable onPress={()=>handleSelectedHeart(index)}>
      {isSelected?<Icon name='heart' color="red" size={30}/> :<Icon name='hearto' color="black" size={30}/> } 
       </Pressable>
       <Pressable>
        <EvilIcons name='comment' size={35} color='black'/>
       </Pressable>
       <Pressable>
        <Entypo name='share' size={30} color='black'/>
       </Pressable>
      </Card.Actions>
    </Card>
  );
  }
  return <View style={styles.container}>{data.map(MyComponent)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  CardContainer: {
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default Blogs;
