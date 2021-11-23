import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import logo from '../../../assets/images/logo.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import clothes from '../../../assets/images/clothes.jpg'

export default Inventory = ({navigation})=>{

    const x = [1,2,3,4,5,6,7,8,8,3];

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
            <Text style={{fontSize: 25,color: "#073B80"}}>Product Summary</Text>
        </View>

        <ScrollView style={{marginBottom: 30}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: "row",marginLeft: 20}}>
            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="bitbucket"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>20 Products</Text>
                <Text style={{fontSize: 15}}>Out of stock</Text>
                </View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="bitbucket"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>20 Products</Text>
                <Text style={{fontSize: 15}}>In Stock</Text></View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="bitbucket"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>20 Products</Text>
                <Text style={{fontSize: 15}}>Last week</Text>
            </View></View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="bitbucket"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>20 Products</Text>
                <Text style={{fontSize: 15}}>Yesterday</Text>
                </View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="bitbucket"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>20 Products</Text>
                <Text style={{fontSize: 15}}>Last month</Text>
                </View>
            </View>

            <View style={styles.box}>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
            <FontAwesome 
                    name="bitbucket"
                    size={20}
                    style={{color: "#FF7518",fontSize: 24,marginBottom: 5}}
                />
            </View>
            <View style={{justifyContent: 'center',alignItems: "center"}}>
                <Text style={{fontSize: 15}}>20 Products</Text>
                <Text style={{fontSize: 15}}>Last year</Text>
                </View>
            </View>
            
            </View>
        </ScrollView>

         </View>
         </Animatable.View>

         <ScrollView style={styles.salesActivity}>
        <View style={{flexDirection: "row",padding: 5,borderWidth: 1,borderColor: "gray",borderRadius: 5,marginBottom: 15,marginLeft: "auto",marginRight: "auto",width: "70%"}}>
        <FontAwesome 
                    name="search"
                    size={20}
                    style={{color: "black",fontSize: 18,marginTop: 3,marginLeft: 5}}
                />
             <TextInput placeholder="Search Sales History" style={{fontSize: 20,color: "black",marginLeft: 8,width: "90%"}} />
         </View>
            <View><Text style={{fontSize: 22,color: "#073B80",marginBottom: 20}}>All Product</Text></View>

 {
    x.map((n)=>(
            <View style={{flexDirection: "row",position: "relative",paddingBottom: 10,borderBottomWidth: 1,borderBottomColor: "lavender",marginBottom: 20}}>
         <Image source={clothes} style={{height: 70,width: 70,borderRadius: 7}}></Image>
         <View style={{marginTop: 10,marginLeft: 10}}>
             <Text style={{fontSize: 16,fontWeight: "bold"}}>Product Name</Text>
             <Text  style={{fontSize: 16,marginTop: 12}}>Product Category</Text>
         </View>

         <View style={{flexDirection: "row",marginTop: 25,position: "absolute",right: 0}}>

             <View style={{marginTop: -10}}>
                 <Text style={{fontSize: 20,fontWeight: "bold",color: "#EC6448"}}>$ 1,574</Text>
                 <Text style={{fontSize: 16,fontWeight: "bold"}}>35 In Stock</Text>
                 </View>

<TouchableOpacity style={[styles.deleteBtn, styles.actionBtn2,{marginLeft: 12}]}>
         <LinearGradient
                    colors={['#ffff', '#FFF']}
                >
         <Text>
             <FontAwesome
              name="edit"
              size={20}
              style={{color: "#333333",fontSize: 25}}
             ></FontAwesome>
        </Text>
        </LinearGradient>
        </TouchableOpacity>

         <TouchableOpacity style={[styles.deleteBtn, styles.actionBtn2,{marginLeft: 12}]}>
         <LinearGradient
                    colors={['#ffff', '#FFF']}
                >
         <Text>
             <FontAwesome
              name="trash"
              size={20}
              style={{color: "#333333",fontSize: 25}}
             ></FontAwesome>
        </Text>
        </LinearGradient>
        </TouchableOpacity>

         </View>
            </View>
            ))}
         </ScrollView>

         <TouchableOpacity style={[styles.button, styles.actionBtn]} onPress={()=>navigation.navigate("newProduct")}>
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
    deleteBtn: {
        width: 25,
        height: 25,
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
    }
});