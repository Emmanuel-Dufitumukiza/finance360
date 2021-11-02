import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import logo from '../../../assets/images/logo.png'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';

export default ForgotPassword = ({navigation})=>{

    const [data, setData] = React.useState({
        password: '',
        email: '',
        secureTextEntry: true
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

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
            <Text style={styles.text_header}>Forget Password</Text>
            <View>
                <Text style={{fontSize: 16}}>Provide your e-mail to get a password reset link</Text>
            </View>
        </View>

       <View style={{padding: 10}}>
       <View style={styles.input}>
        <FontAwesome 
                    name="envelope"
                    size={20}
                    style={{color: "#666666",fontSize: 20,marginTop: 4}}
                />
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 10}}>
            <TouchableOpacity
                    style={styles.signIn}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Send Code</Text>
                </LinearGradient>
                </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 20}}>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("login")}
                >
                <LinearGradient
                    colors={['black', 'black']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Back to Login</Text>
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
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 50,
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
    input2:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        marginTop: 20
    },
    signIn: {
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