import React from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity,TextInput  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import SelectInput from 'react-native-select-input-ios'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default NewSales = ({navigation})=>{

    const options = [{ value: null, label: 'Product name' },{ value: "1", label: 'Business Owner'},{ value: "2", label: 'Business Manager'},{ value: "3", label: 'Accountant'}]
    const options2 = [{ value: null, label: 'Unit' },{ value: "1", label: 'Business Owner'},{ value: "2", label: 'Business Manager'},{ value: "3", label: 'Accountant'}]
 
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
            <View style={{flexDirection: "row", marginTop: 25}}>
         
            <TouchableOpacity style={[styles.button, styles.actionBtn]} onPress={()=>navigation.goBack()}>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
         <Text>
             <FontAwesome
              name="angle-left"
              size={20}
              style={{color: "#FFF",fontSize: 50}}
             ></FontAwesome>
        </Text>
        </LinearGradient>
        </TouchableOpacity>

         <View style={{position: "absolute",right: 20,top: 14}}>
         <TouchableOpacity style={{shadowOpacity: 0.1}}>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
             <Text onPress={()=>navigation.goBack()} style={{backgroundColor: "black",color: "#fff",borderRadius: 10,paddingLeft: 20,paddingRight: 20,paddingTop: 5,paddingBottom: 5}}>
                 Cancel
             </Text>
        </LinearGradient>
        </TouchableOpacity>
                </View>
         </View>

         <View style={{justifyContent: 'center',alignItems: "center",marginTop: -15}}>
            <Text style={{fontSize: 24,color: "#FFF",fontWeight: "bold"}}>New Sales</Text>
        </View>
            </View>

            <ScrollView style={{flex: 1}}>
            <View style={{justifyContent: 'center',alignItems: "center",marginTop: 10}}>
           <View style={{flexDirection: "row"}}>
           <Text style={{fontSize: 18}}>Receipt: </Text>
            <Text style={{fontWeight: "bold",fontSize: 18,borderBottomColor: "black",borderBottomWidth: 1}}>RC2045373</Text>
           </View>

           <Text style={{fontWeight: 'bold',fontSize: 23,marginTop: 10}}>Total = RF800,000</Text>
        </View>

        <View style={{padding: 20}}>
        <View style={[{height: 50},styles.input2]}>
        <SelectInput style={{width: "100%",marginTop: -10}} value={0} options={options} />
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={styles.input}>
                <TextInput 
                    placeholder="Quantity"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={[{height: 50,width: "45%",position: "absolute",right: 0},styles.input2]}>
        <SelectInput style={{width: "100%",marginTop: -10}} value={0} options={options2} />
        </View> 
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input]}>
                <TextInput 
                    placeholder="Price"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={[styles.input,{position: "absolute",right: 0}]}>
                <Text style={styles.textInput}>RWF</Text>
        </View>
        </View>

        <View style={{marginTop: 15,marginBottom: 25}}>
           <Text style={{fontSize: 19,alignSelf: 'flex-end'}}>Sub-Total RF400,000</Text>
            </View>

            <View style={[{height: 50},styles.input2]}>
        <SelectInput style={{width: "100%",marginTop: -10}} value={0} options={options} />
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={styles.input}>
                <TextInput 
                    placeholder="Quantity"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={[{height: 50,width: "45%",position: "absolute",right: 0},styles.input2]}>
        <SelectInput style={{width: "100%",marginTop: -10}} value={0} options={options2} />
        </View> 
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input]}>
                <TextInput 
                    placeholder="Price"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>

        <View style={[styles.input,{position: "absolute",right: 0}]}>
                <Text style={styles.textInput}>RWF</Text>
        </View>
        </View>

        <View style={{marginTop: 15,marginBottom: 0}}>
           <Text style={{fontSize: 19,alignSelf: 'flex-end'}}>Sub-Total RF400,000</Text>
            </View>

            <TouchableOpacity style={[styles.button, styles.actionBtn]} onPress={()=>navigation.navigate("newSales")}>
         <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                >
         <Text>
         <Ionicons name={"add"} size={25} color={"#FFF"} />
        </Text>
        </LinearGradient>
        </TouchableOpacity>
        <Text style={{marginLeft: 20,marginBottom: 7}}>Add More</Text>

            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("checkOutPage")}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>PROCEED</Text>
                </LinearGradient>
                </TouchableOpacity>

        </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        flex: 1
    },
    topBar:{
        backgroundColor: "#FF7518",
        width: "100%",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        paddingBottom: 25
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
        shadowOpacity: 5.0,
        borderRadius: 150,
        marginTop: -9

    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 0.2,
        borderColor: '#FF7518',
        fontSize: 18
    },
    input2:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6
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
        width: "45%",
        height: 50
    },
    signIn: {
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 16,
        marginTop: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF7518',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        marginLeft: 30,
        shadowOpacity: 5.0,
        borderRadius: 150

    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 0.2,
        borderColor: '#FF7518',
        fontSize: 15
    }
})