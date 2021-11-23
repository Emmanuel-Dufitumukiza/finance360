import React,{useState, useEffect} from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity,TextInput  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import SelectInput from 'react-native-select-input-ios'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group';

export default NewDebt = ({navigation})=>{

 const radioButtonsData = [
        {
          id: '1',
          label: 'New Debt',
          value: 'MoMo',
          color: 'black',
          selected: true,
        },
        {
          id: '2',
          label: 'Update Debt',
          value: 'Bank Transfer',
          color: 'black',
          selected: false,
        }
    ];

    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    // const [radioButtons2, setRadioButtons] = useState(radioButtonsData);
    
    const onPressRadioButton = radioButtonsArray => {
        if(radioButtonsArray[1].selected == true){
            navigation.navigate("updateDebt")
        }
        setRadioButtons(radioButtonsArray);
      };
 
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
            <Text style={{fontSize: 24,color: "#FFF",fontWeight: "bold"}}>New Debt</Text>
        </View>
            </View>

            <ScrollView style={{flex: 1}}>
            <View style={{justifyContent: 'center',alignItems: "center",marginTop: 20,padding: 20,marginBottom: 30}}>
           
           <View>
       <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
           </View>

                 <View style={{marginTop: 25}}>
        <View style={styles.input3}>
                <TextInput 
                    placeholder="Customer Name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
        </View>
        </View>

              <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input22,{ width: "85%",borderTopRightRadius: 0,borderBottomRightRadius: 0}]}>
                <TextInput 
                    placeholder="Amount Owed"
                    placeholderTextColor="#666666"
                    style={styles.textInput22} 
                    autoCapitalize="none"
                />
        </View>
        <View style={[styles.input22,{ width: "15%",borderTopLeftRadius: 0,borderBottomLeftRadius: 0}]}>
                <Text style={styles.textInput22}>RF</Text>
        </View>
        </View>
                </View>

            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate("updateDebt")}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>SUBMIT</Text>
                </LinearGradient>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ffff",
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
        marginLeft: 16
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
        borderRadius: 150,
    },
    actionBtn: {
        backgroundColor: '#FF7518',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 0.2,
        borderColor: '#FF7518',
        fontSize: 15,
        marginTop: 20,
    },
    input3:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        width: "100%",
        height: 50
    },
    textInput22: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 18,
    },
    input22:{
        flexDirection: "row",
        backgroundColor: "#F2F1F1",
        padding: 10,
        borderRadius: 6,
        height: 50
    }
})