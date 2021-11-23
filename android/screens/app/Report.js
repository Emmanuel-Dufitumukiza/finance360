import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import logo from '../../../assets/images/logo.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Report = ({navigation})=>{
     return(
        <View style={styles.container}>
                   <Animatable.View 
            // animation="fadeInDownBig"
            style={[{
                backgroundColor: "#fff"
            }]}
        >
         <View style={styles.topNav}>
         <View style={{flexDirection: "row", marginTop: 25}}>
         <Image source={logo} style={{height: 40,width: "30%",marginLeft: 14}}></Image>

         <View style={{position: "absolute",right: 20,top: 10}}>
             <Text><FontAwesome 
                    name="bell-o"
                    size={20}
                    style={{color: "#fff",fontSize: 25}}
                /></Text>
                </View>
         </View>

        <View style={{justifyContent: 'center',alignItems: "center",marginBottom: 10,marginTop: 15}}>
            <Text style={{fontSize: 25,color: "#073B80"}}>Statistics</Text>
        </View>

         </View>
         </Animatable.View>

         <ScrollView style={styles.salesActivity}>

             <View style={{flexDirection: "row"}}>
                 <View style={{backgroundColor: "#FFC097",padding: 20,borderRadius: 10,width: "48%"}}>
                     <Text style={{fontSize: 18}}>Money In</Text>
                     <Text style={{fontSize: 16,color: "#828282"}}>This Month</Text>

                     <Text style={{fontSize: 20,fontWeight: "bold",marginTop: 10}}>+ RF3,456,000</Text>
                 </View>
             
                 <View style={{backgroundColor: "#8BB4FB",padding: 20,borderRadius: 10,width: "48%",position: 'absolute',right: 0}}>
                     <Text style={{fontSize: 18}}>Money Out</Text>
                     <Text style={{fontSize: 16,color: "#828282"}}>This Month</Text>

                     <Text style={{fontSize: 20,fontWeight: "bold",marginTop: 10}}>- RF3,456,000</Text>
                 </View>
             </View>
           
         </ScrollView>
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    },
    topNav: {
      backgroundColor: "#FF7518",
      width: "100%",
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      paddingBottom: 20
    },
    box:{
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginRight: 20
    },
    salesActivity:{
        backgroundColor: "#ffff",
        padding: 20,
        paddingBottom: 0
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
        position: 'absolute',
        bottom: 20,
        right: 10,
        shadowOpacity: 5.0,
        borderRadius: 150

    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 0.2,
        borderColor: '#FF7518',
        fontSize: 18
    }
});