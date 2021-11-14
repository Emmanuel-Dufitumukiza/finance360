import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import logo from '../../../assets/images/logo.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';

export default SalesSummary = ({navigation})=>{
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
            <Text style={{fontSize: 25,color: "#073B80"}}>Sales Summary</Text>
        </View>

        <ScrollView style={{marginBottom: 30}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: "row",marginLeft: 20}}>
            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="money"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>12,000 RWF</Text>
                <Text style={{fontSize: 15}}>Today's sales</Text>
                </View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="money"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>12,000 RWF</Text>
                <Text style={{fontSize: 15}}>Today's sales</Text></View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="money"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>12,000,000 RWF</Text>
                <Text style={{fontSize: 15}}>Last week</Text>
            </View></View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="money"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>12,000,000 RWF</Text>
                <Text style={{fontSize: 15}}>Yesterday</Text>
                </View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="money"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>12,000,000 RWF</Text>
                <Text style={{fontSize: 15}}>Last month</Text>
                </View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="money"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>12,000,000 RWF</Text>
                <Text style={{fontSize: 15}}>Last year</Text>
                </View>
            </View>
            
            </View>
        </ScrollView>

         </View>
         </Animatable.View>

         <ScrollView style={styles.salesActivity}>
            <View><Text style={{fontSize: 22,color: "#073B80",marginBottom: 20}}>Sales Activity</Text></View>

            <View style={{marginBottom: 20,paddingBottom: 10,borderBottomColor: "lavender",borderBottomWidth:0.8}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>

            <View style={{marginBottom: 20,paddingBottom: 10}}>
                <Text style={{fontSize: 16,marginLeft: 30}}>Cement
                </Text>
                <Text style={{fontSize: 16,color: "grey",marginLeft: 30}}>Cash</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16}}>RF 100.00</Text>
                <Text style={{position: "absolute",right: 20,fontSize: 16,top: 20,color: "grey"}}>4:26 PM</Text>
            </View>
         </ScrollView>

         <TouchableOpacity>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
         <View style={[styles.button, styles.actionBtn]}>
             <FontAwesome
              name="plus"
              size={20}
              style={{color: "#FFF",fontSize: 24}}
             ></FontAwesome>
         {/* <Image
         style={{ width: 60, height: 60,color: "#fff" }}
        resizeMode="contain"source={{uri: "https://img.icons8.com/ios/50/000000/plus-math.png"}}></Image> */}
        </View>
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
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 10,
        shadowOpacity: 5.0,

    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#FF7518',
        fontSize: 18
    }
});