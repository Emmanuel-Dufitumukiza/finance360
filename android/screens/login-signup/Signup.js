import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity,Platform} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import logo from '../../../assets/images/logo.png'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
// import RNPickerSelect from 'react-native-picker-select';
import SelectInput from 'react-native-select-input-ios'
import {getNames} from 'country-list'

export default Signup = ({navigation})=>{

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

    const options = [{ value: null, label: 'Job Position' },{ value: "1", label: 'Business Owner'},{ value: "2", label: 'Business Manager'},{ value: "3", label: 'Accountant'}]
    const countries =new Array();
     getNames().map((e)=>{
        countries.push({value: "1",label: e})
    })
    countries.unshift({value: null, label: "Country"})
    
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
            <Text style={styles.text_header}>Create An Account</Text>
            <View>
                <Text style={{fontSize: 16}}>Create account to use <Text style={{fontWeight: "bold",color: "rgba(0, 0, 0, 0.868)",fontSize: 16}}>Finance 360</Text></Text>
            </View>
        </View>

       <View style={{padding: 10}}>

       <View style={styles.input}>
        <FontAwesome 
                    name="user-o"
                    size={20}
                    style={{color: "#666666",fontSize: 20,marginTop: 4}}
                />
                <TextInput 
                    placeholder="Full Name"
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
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={[{height: 50},styles.input2]}>
        <FontAwesome 
                    name="globe"
                    size={20}
                    style={{color: "#666666",fontSize: 22,marginTop: 2,width: "6%"}}
                />
        <SelectInput style={{width: "94%",marginTop: -10}} value={0} options={countries} />
        </View>

        <View style={styles.input2}>
        <FontAwesome 
                    name="lock"
                    size={20}
                    style={{color: "#666666",fontSize: 22,marginTop: 2}}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                />
                     <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
        </View>

        <View style={[{height: 50},styles.input2]}>
        <FontAwesome 
                    name="user-md"
                    size={20}
                    style={{color: "#666666",fontSize: 22,marginTop: 2,width: "6%"}}
                />
        <SelectInput style={{width: "94%",marginTop: -10}} value={0} options={options} />
        </View>

        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 15}}>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("nextSignup")}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Next</Text>
                </LinearGradient>
                </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 40}}>
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
        width: '60%',
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
