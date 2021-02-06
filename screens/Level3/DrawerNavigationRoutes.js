import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SideBarMenu from './SideBarMenu';

import HomePage from './HomePage';
import MyProfile from './MyProfile';
import BloodDonationRequest from './BloodDonationRequest';
import BloodDonationHistory from './BloodDonationHistory';
import BloodCollectionRequest from './BloodCollectionRequest';
import BloodCollectionHistory from './BloodCollectionHistory';

const Drawer = createDrawerNavigator();

export default function DrawerNavigationRoutes() {
  const optionsObj = {
    headerShown: true,
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',

        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: 'white',
        },
        headerShown: true,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={SideBarMenu}>
      <Drawer.Screen
        name="HomePage"
        options={{
          drawerLabel: 'Home',
          ...optionsObj,

          headerStyle: {
            backgroundColor: 'rgb(172,0,26)',
          },
          headerTintColor: 'white',
        }}
        component={HomePage}
      />

      <Drawer.Screen
        name="MyProfile"
        options={{
          drawerLabel: 'My Profile',
          ...optionsObj,
          headerStyle: {
            backgroundColor: 'rgb(172,0,26)',
          },
          headerTintColor: 'white',
        }}
        component={MyProfile}
      />

      <Drawer.Screen
        name="BloodDonationRequest"
        options={{
          drawerLabel: 'Blood Donation Request',
          ...optionsObj,
          headerStyle: {
            backgroundColor: 'rgb(172,0,26)',
          },
          headerTintColor: 'white',
        }}
        component={BloodDonationRequest}
      />

      <Drawer.Screen
        name="BloodDonationHistory"
        options={{
          drawerLabel: 'Blood Donation History',
          ...optionsObj,
          headerStyle: {
            backgroundColor: 'rgb(172,0,26)',
          },
          headerTintColor: 'white',
        }}
        component={BloodDonationHistory}
      />

      <Drawer.Screen
        name="BloodCollectionRequest"
        options={{
          drawerLabel: 'Blood Collection Request',
          ...optionsObj,
          headerStyle: {
            backgroundColor: 'rgb(172,0,26)',
          },
          headerTintColor: 'white',
        }}
        component={BloodCollectionRequest}
      />

      <Drawer.Screen
        name="BloodCollectionHistory"
        options={{
          drawerLabel: 'Blood Collection History',
          ...optionsObj,
          headerStyle: {
            backgroundColor: 'rgb(172,0,26)',
          },
          headerTintColor: 'white',
        }}
        component={BloodCollectionHistory}
      />
    </Drawer.Navigator>
  );
}
