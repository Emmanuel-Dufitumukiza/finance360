import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity,Platform} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import logo from '../../../assets/images/logo.png'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
// import RNPickerSelect from 'react-native-picker-select';

export default NextSignup = ({navigation})=>{
    
    return(
         <View style={styles.container}>
             <View style={styles.header}>
             <Image source={logo} style={{height: 60,width: "50%",objectFit: "cover"}}/>
             </View>

             <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: "#fff"
            }]}
        >
<ScrollView>
<View style={styles.header2}>
            <Text style={styles.text_header}>Add a new Business</Text>
            <View>
                <Text style={{fontSize: 16}}>Create account to use <Text style={{fontWeight: "bold",color: "rgba(0, 0, 0, 0.868)",fontSize: 16}}>Finance 360</Text></Text>
            </View>
        </View>

       <View style={{padding: 10}}>

       <View style={styles.input}>
        <FontAwesome 
                    name="building"
                    size={20}
                    style={{color: "#666666",fontSize: 20,marginTop: 4}}
                />
                <TextInput 
                    placeholder="Business Name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

       <View style={styles.input2}>
        <FontAwesome 
                    name="industry"
                    size={20}
                    style={{color: "#666666",fontSize: 20,marginTop: 4}}
                />
                <TextInput 
                    placeholder="Business Industry"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={styles.input2}>
        <FontAwesome 
                    name="envelope"
                    size={20}
                    style={{color: "#666666",fontSize: 20,marginTop: 4}}
                />
                <TextInput 
                    placeholder="Business Email"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={styles.input2}>
        <FontAwesome 
                    name="map-marker"
                    size={20}
                    style={{color: "#666666",fontSize: 20,marginTop: 4}}
                />
                <TextInput 
                    placeholder="Business Address"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View> 

        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 15,flexDirection: "row",width: "100%"}}>

        <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.goBack()}
                >
                <LinearGradient
                    colors={['#BDBDBD', '#BDBDBD']}
                    style={styles.signIn3}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Back</Text>
                </LinearGradient>
                </TouchableOpacity>

            <TouchableOpacity
                    style={[{marginLeft: 20},styles.signIn]}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn3}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Submit</Text>
                </LinearGradient>
                </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 60}}>
            <Text style={{fontSize: 16}}>Already have an account?</Text>
            <TouchableOpacity
                    style={styles.signIn2}
                    onPress={()=>navigation.navigate("login")}
                >
                <LinearGradient
                    colors={['black', 'black']}
                    style={styles.signIn2}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Log In Here</Text>
                </LinearGradient>
                </TouchableOpacity>
        </View>

       </View>
        
</ScrollView>
            </Animatable.View>

             <StatusBar style="auto" />
         </View>
     )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FF7518'
    },
    
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: "center"
    },
    header2: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: "center",
        marginTop: 10
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'rgba(0, 0, 0, 0.768)',
        fontWeight: 'bold',
        fontSize: 24
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
        marginTop: -25
    },
    input1: {
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
        // flexDirection: "row",
    },
    input2:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        marginTop: 20
    },
    signIn: {
        width: '47%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    signIn3: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    signIn2: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
