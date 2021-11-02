import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './login-signup/Login';
import Signup from './login-signup/Signup';
import ForgotPassword from './login-signup/ForgotPassword'
import NextSignup from './login-signup/NextSignup'
import Slide1 from './firstPages/Slide1';
import Slide2 from './firstPages/Slide2';
import Slide3 from './firstPages/Slide3';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none' initialRouteName="slide1">
        <RootStack.Screen name="slide1" component={Slide1}/>
        <RootStack.Screen name="slide2" component={Slide2}/>
        <RootStack.Screen name="slide3" component={Slide3}/>
        <RootStack.Screen name="login" component={Login}/>
        <RootStack.Screen name="signup" component={Signup}/>
        <RootStack.Screen name="forgotPassword" component={ForgotPassword}/>
        <RootStack.Screen name="nextSignup" component={NextSignup}/>
    </RootStack.Navigator>
);

export default RootStackScreen;