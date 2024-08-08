import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../Redux/UserDetailsReducer';
import Blogs from './Blogs';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [Weight, setWeight] = useState();
  const [water, setWater] = useState(0);
  const [Calori, setCalori] = useState(false);
  const navigation = useNavigation();
  const userDetails = useSelector(selectUserDetails);

  useEffect(() => {
    try {
      async function fetchUser() {
        setWeight(userDetails.weight);
      }
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, [userDetails]);

  const plusWater = () => {
    if (water < 10) setWater(water + 1);
  };
  const minusWater = () => {
    if (water > 0) setWater(water - 1);
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          {/* Nutrition */}
          <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
            <Text style={[styles.title, { padding: 10 }]}>Nutrition</Text>
            <Card style={{ backgroundColor: '#FFFFFF' }}>
              <Card.Content
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Pressable style={styles.Pressable}>
                  <Icon
                    name="silverware-fork-knife"
                    color="#FFA726"
                    size={30}
                  />
                </Pressable>
                <Text style={[styles.title, { verticalAlign: 'middle' }]}>
                  Eat upto 2,900 cal
                </Text>
                <Icon
                  name="plus-circle"
                  color="#ff9900"
                  size={35}
                  style={{ verticalAlign: 'middle' }}
                />
              </Card.Content>
            </Card>
          </View>
          {/* Weight */}
          <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
            <Text style={[styles.title, { padding: 10 }]}>Weight</Text>
            <Card style={{ backgroundColor: '#FFFFFF' }}>
              <Card.Content
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Pressable style={styles.Pressable}>
                  <FontAwesome5 name="weight" color="#7300e6" size={30} />
                </Pressable>
                <Pressable>
                  <Text
                    style={[
                      styles.title,
                      { verticalAlign: 'middle', paddingTop: 10 },
                    ]}>
                    {Weight} Kg
                  </Text>
                  <Text style={{fontSize:16,color:'gray',fontWeight:'600'}}>{Math.floor(21.2*(userDetails.height**2)/10000) <= Weight ?`Lose ${Weight-Math.floor(21.2*(userDetails.height**2)/10000)} kg`:`Gain ${Math.floor(21.2*(userDetails.height**2)/10000)-Weight} kg` } </Text>
                </Pressable>
                <Icon
                  name="plus-circle"
                  color="#7300e6"
                  size={35}
                  style={{ verticalAlign: 'middle' }}
                />
              </Card.Content>
            </Card>
          </View>
          {/* OtherTrack */}
          <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
            <Text style={[styles.title, { padding: 10 }]}>Other Track</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Card
                style={{
                  width: '47%',
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                }} onPress={() => setCalori(!Calori)}>
                {Calori ?  (<Card.Content
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Pressable style={styles.Pressable}>
                  <Icon name="thumb-up" size={35} color="#FC6600" />
                  </Pressable>
                  <Text
                    style={[
                      styles.title,
                      { verticalAlign: 'middle', paddingTop: 10 },
                    ]}>
                    Burned 
                  </Text>
                  <Text>580 cal</Text>
                </Card.Content>):(<Card.Content
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Pressable style={styles.Pressable}>
                    <FontAwesome5 name="running" color="#1a75ff" size={30} />
                  </Pressable>
                  <Text
                    style={[
                      styles.title,
                      { verticalAlign: 'middle', paddingTop: 10 },
                    ]}>
                    Burn at least
                  </Text>
                  <Text>580 cal</Text>
                </Card.Content>)}
              </Card>
              <Card style={{ width: '47%', backgroundColor: '#FFFFFF' }}>
                {water != 10 ? (
                  <Card.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="minus-circle"
                      color="black"
                      size={35}
                      onPress={minusWater}
                    />
                    <Pressable style={styles.Pressable}>
                      <FontAwesome5
                        name="glass-whiskey"
                        color="#1a75ff"
                        size={35}
                      />
                    </Pressable>
                    <Icon
                      name="plus-circle"
                      color="black"
                      size={35}
                      onPress={plusWater}
                    />
                  </Card.Content>
                ) : (
                  <Card.Content style={{ alignItems: 'center', marginTop: 10 }}>
                    <Pressable style={styles.Pressable}>
                      <Icon name="thumb-up" size={35} color="#FC6600" />
                    </Pressable>
                  </Card.Content>
                )}
                <Text
                  style={[styles.title, { paddingTop: 10, textAlign: 'center' }]}>

                  {water == 0 ? 'Drink 10 glasses' : `${water} of 10`}
                </Text>
                <Text style={{ textAlign: 'center' }}>of water</Text>
              </Card>
            </View>
          </View>
          <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
            <Text style={[styles.title, { padding: 10 }]}>Discover</Text>
            <Card style={styles.card}>
              <Card.Content>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}>
                  <Icon name="information" size={25} color="black" />
                  <Text
                    style={{ fontSize: 22, color: 'black', fontWeight: '500' }}>
                    Important Notice
                  </Text>
                </Pressable>
                <Text style={styles.text}>
                  I am constantly working on improving your FitFolio app
                  exprience. As a part of these efforts, I am discontinuing
                  support for Discover feature, and this feature will be remove
                  in a subsequent release.
                </Text>
              </Card.Content>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: '600',
                  padding: 10,
                  fontSize: 20,
                  color: 'gray',
                }} onPress={() => navigation.navigate('feedback')}>
                GIVE FEEDBACK
              </Text>
            </Card>
          </View>
          <Blogs />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    gap: 10,
  },
  card: {
    backgroundColor: '#ffccb3',
    marginHorizontal: 10,
  },
  Pressable: {
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#f2f2f2',
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    paddingLeft: 10,
  },
});
export default HomeScreen;
