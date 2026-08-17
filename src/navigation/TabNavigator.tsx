// src/navigation/TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import About from '../../app/(tabs)/about';
import Skills from '../../app/(tabs)/skills';
import Projects from '../../app/(tabs)/projects';
import Achievements from '../../app/(tabs)/achievements';
import Contact from '../../app/(tabs)/contact';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          switch (route.name) {
            case 'About':
              iconName = 'person-circle-outline';
              break;
            case 'Skills':
              iconName = 'construct-outline';
              break;
            case 'Projects':
              iconName = 'folder-open-outline';
              break;
            case 'Achievements':
              iconName = 'trophy-outline';
              break;
            case 'Contact':
              iconName = 'call-outline';
              break;
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4f46e5',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Skills" component={Skills} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Achievements" component={Achievements} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
