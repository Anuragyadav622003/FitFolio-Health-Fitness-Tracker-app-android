import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './MainComponent/HomeScreen';
import PlanScreen from './MainComponent/PlanScreen';
import Store from './MainComponent/Store';
import More from './MainComponent/More';
import {Pressable, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const TabNav = () => {
const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Plans') {
            iconName = focused ? 'arrow-up-circle' : 'arrow-up-circle-outline';
          } else if (route.name === 'More') {
            iconName = focused
              ? 'ellipsis-horizontal-circle-sharp'
              : 'ellipsis-horizontal-circle-outline';
          } else if (route.name === 'Store') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return (
            <Icon name={iconName} size={focused ? 25 : 22} color="black" />
          );
        },
        // headerShown: false,
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              fontSize: focused ? 16 : 14,
              color: 'black',
              fontWeight: focused ? '700' : '500',
              paddingBottom: 5,
            }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          height: 60,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Pressable style={{paddingRight: 12}}>
              <Icon name="share-social-sharp" size={25} color="black" />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Plans"
        component={PlanScreen}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 20,
                color: 'black',
                paddingLeft: 2,
              }}>
              My Plans
            </Text>
          ),
          headerRight: () => (
            <Pressable
              style={{paddingRight: 12, flexDirection: 'row', gap: 10}}>
              <Icon name="headset" size={25} color="black" />
              <Text style={{fontWeight: '400', fontSize: 18, color: 'black'}}>
                NEED HELP?
              </Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarBadge:3,
          tabBarBadgeStyle: {backgroundColor: 'red'},
          headerRight: () => (
            <Pressable style={{paddingRight: 12,flexDirection:'row',gap:15}}>
              <Icon name="cart" size={25} color="black" onPress={()=>navigation.navigate('MyCart')} />
              <Icon name="share-social-sharp" size={25} color="black" />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="More" component={More} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};
export default TabNav;
