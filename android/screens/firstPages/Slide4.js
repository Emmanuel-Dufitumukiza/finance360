import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import image1 from '../../../assets/images/slide3.png'
import {LinearGradient} from 'expo-linear-gradient';

export default Slide4 = ({navigation})=>{
    return(
        <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: "center",backgroundColor: "#fff",flex: 1}}>
            <Image source={image1} style={{width: "75%",height: 250}}></Image>

            <View style={{marginTop: 30,justifyContent: 'center',alignItems: "center",marginBottom: 100}}>
                <Text style={{fontSize: 20,fontWeight: "bold"}}>Get Data-Driven Business Strategy</Text>
                <Text style={{fontSize: 16,marginTop: 10}}>Get business insights to improve your</Text>
                <Text style={{fontSize: 16,marginTop: 3}}>business based on your businesses financial data</Text>

                <View style={{flexDirection: "row",marginTop: 30,justifyContent: 'center',alignItems: "center"}}>
                <View style={{flexDirection: "row",marginTop: 20}}>
            <Text onPress={()=>navigation.navigate("slide1")} style={[styles.ballons,{fontSize: 16}]}></Text>
            <Text onPress={()=>navigation.navigate("slide2")} style={[styles.ballons,{fontSize: 16}]}></Text>
            <Text onPress={()=>navigation.navigate("slide3")} style={[styles.ballons,{fontSize: 16}]}></Text>
            <Text style={[styles.activeBallon,{fontSize: 16}]}></Text>
            </View>
                    </View>

            </View>

            <View style={{justifyContent: 'center',alignItems: "center",marginBottom: 30}}>
                <Text style={{fontSize: 16}}>By Taping “Agree and Continue” below you agree to our</Text>
                <Text style={{fontSize: 16,marginTop: 3}}>The <Text style={{color: "#FF7518",fontWeight: "bold"}}>Terms and Conditions</Text> and <Text style={{color: "#FF7518",fontWeight: "bold"}}>Privcay Policy.</Text></Text>
            </View>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("login")}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Agree & Continue</Text>
                </LinearGradient>
                </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    ballons: {
        width: 17,
        height: 17,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "black",
        backgroundColor: "white",
        marginRight: 20
    },
    activeBallon: {
        width: 37,
        height: 17,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "black",
        backgroundColor: "black",
        marginRight: 20
    },
    signIn: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });