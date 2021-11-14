import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './SalesSummary';
import DetailsScreen from '../firstPages/Slide4';
import SettingsScreen from '../app/SalesSummary';

//Screen names
const homeName = "Sales";
const detailsName = "Expenses";
const settingsName = "Report";
const inventory = "Inventory";
const controlPanel = "Control Panel";

const Tab = createBottomTabNavigator();

export default BottomNav = ()=>{
     return(
        // <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            initialRouteName: {homeName},
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === detailsName) {
                iconName = focused ? 'list' : 'list-outline';
  
              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              else if (rn === inventory) {
                iconName = focused ? 'cube' : 'cube-outline';
              }
              else if (rn === controlPanel) {
                iconName = focused ? 'list' : 'list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FF7518',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 4, fontSize: 13 },
            style: { padding: 0, height: 70},
            tabStyle: {
                height: 50
              }
          }}>
  
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={detailsName} component={DetailsScreen} />
          <Tab.Screen name={settingsName} component={SettingsScreen} />
          <Tab.Screen name={inventory} component={SettingsScreen} />
          <Tab.Screen name={controlPanel} component={SettingsScreen} />
  
        </Tab.Navigator>
    //   </NavigationContainer>
     )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    }
});