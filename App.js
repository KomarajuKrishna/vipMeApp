import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import {Home} from './src/components/home/home'
import { Reservation } from './src/components/reservations/reservation';
import { Media } from './src/components/media/media';
import { Events } from './src/components/events/events';
import { Rewards } from './src/components/rewards/rewards';
import {Profile} from './src/components/profile/profile'
import { MediaProfile } from './src/components/media/mediaProfile';

const Tab = createBottomTabNavigator();
const MediaStack = createStackNavigator();

export  function MediaStackScreen() {
  return (
    <MediaStack.Navigator>
      <MediaStack.Screen
        name="Media"
        component={Media}
        options={{ headerShown: false }}
      />
      <MediaStack.Screen
        name="MediaProfile"
        component={MediaProfile}
        options={{ headerShown: false }}
      />
    </MediaStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'yellow',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 11,
            fontFamily: 'Roboto'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Reservations"
          component={Reservation}

          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="table-chair" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Media"
          component={Media}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="perm-media" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event-seat" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={Rewards}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="Trophy" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

