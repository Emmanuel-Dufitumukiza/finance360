import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import logo from '../../../assets/images/logo.png'
import expenses from '../../../assets/images/expenses.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ExpenseSummary = ({navigation})=>{
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
            <Text style={{fontSize: 25,color: "#073B80"}}>Expenses Summary</Text>
        </View>

        <View style={{justifyContent: 'center',alignItems: "center"}}>
        <Image source={expenses}></Image>
        </View>

         </View>
         </Animatable.View>

         <ScrollView style={styles.salesActivity}>
            <View><Text style={{fontSize: 22,color: "#073B80",marginBottom: 20}}>Expenses Activity</Text></View>

            <View style={{marginBottom: 20,paddingBottom: 10,borderBottomColor: "lavender",borderBottomWidth:0.8}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Transport
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>
         </ScrollView>

         <TouchableOpacity style={[styles.button, styles.actionBtn]} onPress={()=>navigation.navigate("newExpense")}>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
         <Text>
             <Ionicons name={"add"} size={40} color={"#FFF"} />
        </Text>
        </LinearGradient>
        </TouchableOpacity>
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