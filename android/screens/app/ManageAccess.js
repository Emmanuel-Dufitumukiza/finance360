import React,{useState, useEffect} from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity,TextInput  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import SelectInput from 'react-native-select-input-ios'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group';

export default MyDebt = ({navigation})=>{

    const x = [1,2,3,4,5,6,7,8,8,3];
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
            <View style={{flexDirection: "row", marginTop: 25}}>
         
            <TouchableOpacity style={[styles.button, styles.actionBtn]} onPress={()=>navigation.goBack()}>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
         <Text>
             <FontAwesome
              name="angle-left"
              size={20}
              style={{color: "#FFF",fontSize: 50}}
             ></FontAwesome>
        </Text>
        </LinearGradient>
        </TouchableOpacity>

         {/* <View style={{position: "absolute",right: 20,top: 14}}>
         <TouchableOpacity style={{shadowOpacity: 0.1}}>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
             <Text onPress={()=>navigation.goBack()} style={{backgroundColor: "black",color: "#fff",borderRadius: 10,paddingLeft: 20,paddingRight: 20,paddingTop: 5,paddingBottom: 5}}>
                 Cancel
             </Text>
        </LinearGradient>
        </TouchableOpacity>
                </View> */}
         </View>

         <View style={{justifyContent: 'center',alignItems: "center",marginTop: -15}}>
            <Text style={{fontSize: 24,color: "#FFF",fontWeight: "bold"}}>Manage Access</Text>
        </View>
            </View>

            <ScrollView style={{flex: 1}}>
            <View style={{marginTop: 0,padding: 20}}>
             
            <View style={{flexDirection: "row",padding: 5,borderWidth: 1,borderColor: "#F2F1F0",borderRadius: 5,marginBottom: 10,marginLeft: "auto",marginRight: "auto",width: "100%",backgroundColor: "#F2F1F1"}}>
        <FontAwesome 
                    name="search"
                    size={20}
                    style={{color: "#747480",fontSize: 18,marginTop: 3,marginLeft: 5}}
                />
             <TextInput placeholder="Search" style={{fontSize: 20,color: "black",marginLeft: 8,width: "90%"}} />
         </View>

            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("addAccess")}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Add</Text>
                </LinearGradient>
                </TouchableOpacity>

{
    x.map((n)=>(
        <View style={{flexDirection: "row",marginTop: 15}}>
              <View style={{backgroundColor: "#fff",padding: 15, borderRadius: 10,position: "relative",width: "90%"}}>
                 <Text style={{fontWeight: "bold",fontSize: 17,color: "#333333"}}>Inkomoko Rwanda</Text>
                 <Text style={{fontSize: 17,color: "#858585"}}>Tue 12.05.2021</Text>
                 <Text style={{fontWeight: "bold",fontSize: 17,color: "#333333",alignSelf: 'flex-end',position: "absolute",top: 25,right: 20}}>View Only</Text>
                    </View>

<TouchableOpacity style={[styles.deleteBtn, styles.actionBtn2,{width: "10%",marginTop: 20}]}>
         <LinearGradient
                    colors={['#ffff', '#FFF']}
                >
         <Text>
             <FontAwesome
              name="trash"
              size={20}
              style={{color: "#333333",fontSize: 30}}
             ></FontAwesome>
        </Text>
        </LinearGradient>
        </TouchableOpacity>
                  </View>
    ))
}
            </View>
            


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(255, 255, 255, 0.549)",
        flex: 1
    },
    topBar:{
        backgroundColor: "#FF7518",
        width: "100%",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        paddingBottom: 25
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF7518',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        shadowOpacity: 5.0,
        borderRadius: 150,
    },
    deleteBtn: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF7518',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        shadowOpacity: 5.0,
        borderRadius: 150,
    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 0.2,
        borderColor: '#FF7518',
        fontSize: 18
    },
    input2:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 18,
    },
    input:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        width: "45%",
        height: 50
    },
    signIn: {
        width: '60%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'flex-end'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF7518',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        marginLeft: 30,
        shadowOpacity: 5.0,
        borderRadius: 150,
    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 0.2,
        borderColor: '#FF7518',
        fontSize: 15,
        marginTop: 20,
    },
    input3:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        width: "100%",
        height: 50
    },
    textInput22: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 18,
    },
    input22:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        height: 50
    }
})