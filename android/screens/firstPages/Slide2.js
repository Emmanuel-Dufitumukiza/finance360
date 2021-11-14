import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import image1 from '../../../assets/images/slide2.png'
import {LinearGradient} from 'expo-linear-gradient';

export default Slide2 = ({navigation})=>{
    return(
        <View style={styles.container}>
        <View style={{justifyContent: 'center',alignItems: "center",backgroundColor: "#fff",flex: 1}}>
            <Image source={image1} style={{width: "75%",height: 250}}></Image>

            <View style={{marginTop: 25,justifyContent: 'center',alignItems: "center",marginBottom: 100}}>
                <Text style={{fontSize: 20,fontWeight: "bold"}}>Manage Debtors</Text>
                <Text style={{fontSize: 16,marginTop: 10}}>Track and manage your owing customers</Text>
                <Text style={{fontSize: 16}}>without stressing.</Text>

                <View style={{flexDirection: "row",marginTop: 30}}>
                <View style={{flexDirection: "row",marginTop: 30}}>
            <Text onPress={()=>navigation.navigate("slide1")} style={[styles.ballons,{fontSize: 16}]}></Text>
            <Text style={[styles.activeBallon,{fontSize: 16}]}></Text>
            <Text onPress={()=>navigation.navigate("slide3")} style={[styles.ballons,{fontSize: 16}]}></Text>
            <Text onPress={()=>navigation.navigate("slide4")} style={[styles.ballons,{fontSize: 16}]}></Text>
            </View>
                    </View>

            </View>

               
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("slide3")}
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
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });