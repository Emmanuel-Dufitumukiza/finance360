import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './login-signup/Login';
import Signup from './login-signup/Signup';
import ForgotPassword from './login-signup/ForgotPassword'
import NextSignup from './login-signup/NextSignup'
import Slide1 from './firstPages/Slide1';
import Slide2 from './firstPages/Slide2';
import Slide3 from './firstPages/Slide3';
import Slide4 from './firstPages/Slide4';
import BottomNav from './app/BottomNav';
import NewSales from './app/NewSales';
import CheckOutPage from './app/CheckOutPage';
import NewExpense from './app/NewExpense';
import Proceed from './app/Proceed';
import NewProduct from './app/NewProduct'
import UpdateStock from './app/UpdateStock'
import Inventory from './app/Inventory';
import CustomerDebts from './app/CustomerDebts'
import NewDebt from './app/NewDebt'
import UpdateDebt from './app/UpdateDebt';
import MyDebt from './app/MyDebt'
import MyNewDebt from './app/MyNewDebt'
import UpdateMyDebt from './app/UpdateMyDebt';
import ManageAccess from './app/ManageAccess';
import AddAccess from './app/AddAccess';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none' initialRouteName="slide1">
        <RootStack.Screen name="slide1" component={Slide1}/>
        <RootStack.Screen name="slide2" component={Slide2}/>
        <RootStack.Screen name="slide3" component={Slide3}/>
        <RootStack.Screen name="slide4" component={Slide4}/>
        <RootStack.Screen name="login" component={Login}/>
        <RootStack.Screen name="signup" component={Signup}/>
        <RootStack.Screen name="forgotPassword" component={ForgotPassword}/>
        <RootStack.Screen name="nextSignup" component={NextSignup}/>

        {/* App's routes */}

        <RootStack.Screen name="newSales" component={NewSales}/>
        <RootStack.Screen name="checkOutPage" component={CheckOutPage}/>
        <RootStack.Screen name="newExpense" component={NewExpense}/>
        <RootStack.Screen name="proceed" component={Proceed}/>
        <RootStack.Screen name="newProduct" component={NewProduct}/>
        <RootStack.Screen name="updateStock" component={UpdateStock}/>
        <RootStack.Screen name="customerDebts" component={CustomerDebts}/>
        <RootStack.Screen name="newDebt" component={NewDebt}/>
        <RootStack.Screen name="updateDebt" component={UpdateDebt}/>
        <RootStack.Screen name="myDebt" component={MyDebt}/>
        <RootStack.Screen name="myNewDebt" component={MyNewDebt}/>
        <RootStack.Screen name="updateMyDebt" component={UpdateMyDebt}/>
        <RootStack.Screen name="manageAccess" component={ManageAccess}/>
        <RootStack.Screen name="addAccess" component={AddAccess}/>
        <RootStack.Screen name="bottomNav" component={BottomNav}/>
    </RootStack.Navigator>
);

export default RootStackScreen;