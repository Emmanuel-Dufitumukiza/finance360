import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './SalesSummary';
import DetailsScreen from '../app/ExpenseSummary';
import SettingsScreen from '../app/Inventory';
import ExpenseSummary from '../app/ExpenseSummary';
import Report from '../app/Report'
import ControlPanel from '../app/ControlPanel'

//Screen names
const homeName = "Sales";
const expenseName = "Expenses";
const settingsName = "Report";
const inventory = "Inventory";
const controlPanel = "Control Panel";

const Tab = createBottomTabNavigator();

export default BottomNav = ({navigation})=>{
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
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
  
              } else if (rn === expenseName) {
                iconName = focused ? 'pricetags' : 'pricetags-outline';
  
              } else if (rn === settingsName) {
                iconName = focused ? 'clipboard' : 'clipboard-outline';
              }
              else if (rn === inventory) {
                iconName = focused ? 'cube' : 'cube-outline';
              }
              else if (rn === controlPanel) {
                iconName = focused ? 'person' : 'person-outline';
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
          <Tab.Screen name={expenseName} component={ExpenseSummary} />
          <Tab.Screen name={settingsName} component={Report} />
          <Tab.Screen name={inventory} component={SettingsScreen} />
          <Tab.Screen name={controlPanel} component={ControlPanel} />
  
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