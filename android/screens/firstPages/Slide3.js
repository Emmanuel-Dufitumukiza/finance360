import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import image1 from '../../../assets/images/slide3.png'
import {LinearGradient} from 'expo-linear-gradient';

export default Slide3 = ({navigation})=>{
    return(
        <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: "center",marginTop: 120}}>
            <Image source={image1} style={{width: "75%",height: 250}}></Image>

            <View style={{marginTop: 25,justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 20,fontWeight: "bold"}}>Optimise your Expenses</Text>
                <Text style={{fontSize: 16,marginTop: 10}}>Track your expenses to optimise your spending</Text>

                <View style={{flexDirection: "row",marginTop: 30}}>
                   <View onClick={()=>navigation.navigate("slide1")} style={styles.ballons}></View>
                   <View style={styles.ballons}></View>
                   <View style={styles.activeBallon}></View>
                   <View style={styles.ballons}></View>
                    </View>

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
                    }]}>Next</Text>
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
        borderRadius: 10,
        marginTop: 60
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });