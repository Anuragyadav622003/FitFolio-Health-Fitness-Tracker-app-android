import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const More = () => {

const navigation = useNavigation();

  const data = [
    {
      component: (
        <Pressable style={{flexDirection: 'row'}} onPress={()=>navigation.navigate('Store')}>
          <FontAwesome name="bag-shopping" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Fitfolio Store
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="progress-check"
            size={30}
            color="black"
          />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Progress Reports
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <Icon name="access-alarms" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Reminder
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <Icon name="flag" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Goals and Budgets
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <FontAwesome name="images" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Snap Gallery
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <Icon name="key" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Activate Plan
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <Icon name="leaderboard" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Tasks and Leaderboard
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable
          style={{flexDirection: 'row'}}
           onPress={() => navigation.navigate('todo')}
          >
          <Foundation name="clipboard-pencil" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Todo list
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable
          style={{flexDirection: 'row'}}
           onPress={() => navigation.navigate('feedbackList')}
          >
          <Icon name="feedback" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
          Community Feedback
          </Text>
        </Pressable>
      ),
    },
  ];

  const data2 = [
    {
      component: (
        <Pressable style={{flexDirection: 'row'}}>
          <AntDesign name="questioncircle" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Helps and Support
          </Text>
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable style={{flexDirection: 'row'}} onPress={()=>navigation.navigate('settings')}>
          <Icon name="settings" size={30} color="black" />
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>
            Settings
          </Text>
        </Pressable>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        
        <View style={styles.container}>
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Check out FitfolioPro</Text>
              <Text style={styles.cardText}>
                Get access to CGM, smart scale and more...
              </Text>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Upgrade</Text>
              </Pressable>
            </View>
          </Card>

          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.cardRow}>
                <Icon name="group-add" size={30} color="black" />
                <Text style={styles.cardRowText}>Invite your friends</Text>
              </View>
              <Image
                source={{
                  uri: 'https://media1.popsugar-assets.com/files/thumbor/Uqk0AaSwRiQ4FffM_ADqluc44kM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/02/06/537/n/38922805/tmp_mv0ceg_4c4c2a5267b558a1_how-long-should-you-work-out-on-treadmill-to-lose-weight.jpg',
                }}
                style={styles.image}
              />
              <Text style={styles.cardText}>
                Win exciting rewards when your friends sign up. It's a referral
                offer like never before.
              </Text>
            </View>
          </Card>

          <Card style={styles.card}>
            {data.map((item, index) => (
              <View key={index} style={styles.cardItem}>
                {item.component}
              </View>
            ))}
          </Card>

          <Card style={styles.card}>
            {data2.map((item, index) => (
              <View key={index} style={styles.cardItem}>
                {item.component}
              </View>
            ))}
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor:'#e6e6e6'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '90%',
    marginBottom: 20,
  },
  cardContent: {
    padding: 15,
    width: '100%',
  },
  cardTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 5,
  },
  cardText: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '700',
    paddingBottom: 10,
  },
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRowText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
  },
  cardItem: {
    height: 70,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3d5c5c',
  },
});

export default More;
