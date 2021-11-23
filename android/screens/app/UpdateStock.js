import React,{useState} from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity,TextInput  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import SelectInput from 'react-native-select-input-ios'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import RadioGroup from 'react-native-radio-buttons-group';

export default UpdateStock = ({navigation})=>{

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

 const radioButtonsData = [
        {
          id: '1',
          label: 'New Product',
          value: 'MoMo',
          color: 'black',
          selected: false,
        },
        {
          id: '2',
          label: 'Update Stock',
          value: 'Bank Transfer',
          color: 'black',
          selected: true,
        }
    ];

    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    // const [radioButtons2, setRadioButtons] = useState(radioButtonsData);
    
    const onPressRadioButton = radioButtonsArray => {
        if(radioButtonsArray[0].selected == true){
            navigation.navigate("newProduct")
        }
        setRadioButtons(radioButtonsArray);
      };

    const options = [{ value: null, label: 'Product name' },{ value: "1", label: 'Business Owner'},{ value: "2", label: 'Business Manager'},{ value: "3", label: 'Accountant'}]
    const reasons = [{ value: null, label: 'Reason for Update' },{ value: "1", label: 'Business Owner'},{ value: "2", label: 'Business Manager'},{ value: "3", label: 'Accountant'}]
 
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
            <Text style={{fontSize: 24,color: "#FFF",fontWeight: "bold"}}>Update Stock</Text>
        </View>
            </View>

            <ScrollView style={{flex: 1}}>
            <View style={{justifyContent: 'center',alignItems: "center",marginTop: 20,padding: 20}}>
           
           <View>
       <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
           </View>

                 <View style={{marginTop: 25}}>
                 <View style={[{height: 50},styles.input2]}>
        <SelectInput style={{width: "100%",marginTop: -10}} value={0} options={options} />
        </View>
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input22,{ width: "65%",backgroundColor: "white"}]}>
                <Text style={styles.textInput22} >Available Quantity</Text>
        </View>
        <View style={[styles.input22,{ width: "35%"}]}>
                <Text style={styles.textInput22}>20</Text>
        </View>
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input22,{ width: "65%",backgroundColor: "white"}]}>
                <Text style={styles.textInput22} >New Quantity</Text>
        </View>
        <View style={[styles.input22,{ width: "35%"}]}>
                <TextInput style={styles.textInput22} placeholder="2000"></TextInput>
        </View>
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input22,{ width: "65%",backgroundColor: "white"}]}>
                <Text style={styles.textInput22} >Cost Price (RWF)</Text>
        </View>
        <View style={[styles.input22,{ width: "35%"}]}>
                <TextInput style={styles.textInput22} placeholder="2000"></TextInput>
        </View>
        </View>

        <View style={{flexDirection: "row",marginTop: 15}}>
        <View style={[styles.input22,{ width: "65%",backgroundColor: "white"}]}>
                <Text style={styles.textInput22} >Selling Price (RWF)</Text>
        </View>
        <View style={[styles.input22,{ width: "35%"}]}>
                <TextInput style={styles.textInput22} placeholder="2000"></TextInput>
        </View>
        </View>

        <View style={{marginTop: 25,marginBottom: 25}}>
                 <View style={[{height: 50},styles.input2]}>
        <SelectInput style={{width: "100%",marginTop: -10}} value={0} options={reasons} />
        </View>
        </View> 
                </View>

                {/* modal */}
                <Modal animationType = {"slide"} isVisible={isModalVisible}>
        <View style={{ flex: 1}}>
          <View style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",borderRadius: 5,
            height: "auto",backgroundColor: "#ffff",paddingTop: 30,paddingBottom: 30,marginTop: 40 }}>

            <Text style={{fontWeight: "bold",fontSize: 18,borderBottomColor: "black",borderBottomWidth: 1}}>Stock Verfication</Text> 
              <Text style={{fontSize: 18,marginTop: 25,marginBottom: 15}}>Upload Proof of Supplier Delivery & Invoice</Text>
               <Text style={{fontSize: 16,marginBottom: 20}}>As Image or DOC</Text>

               <TouchableOpacity
                style={[styles.signIn2,{marginLeft: 22}]}
                onPress={toggleModal}
            >
            <LinearGradient
                colors={['#23F318', '#23F318']}
                style={[styles.signIn2,{flexDirection: "row"}]}
            >
             <FontAwesome
              name="upload"
              size={20}
              style={{color: "#FFF",fontSize: 20}}
             ></FontAwesome>
                <Text style={[styles.textSign, {
                    color:'#fff',marginLeft: 10
                }]}>Upload</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.signIn2,{marginLeft: 22,marginTop: 30}]}
                onPress={toggleModal}
            >
            <LinearGradient
                colors={['#FF781F', '#FF781F']}
                style={[styles.signIn2]}
            >
                <Text style={[styles.textSign, {
                    color:'#fff',marginLeft: 10
                }]}>SUBMIT</Text>
            </LinearGradient>
            </TouchableOpacity>
               
{/* <Button title="Hide modal"  /> */}
              </View>
        </View>
      </Modal>
                {/* end of modal */}

            <TouchableOpacity
                    style={styles.signIn}
                    onPress={toggleModal}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>VERIFY STOCK UPDATE</Text>
                </LinearGradient>
                </TouchableOpacity>

                    <Text style={{alignSelf: "center",marginTop: 20,fontSize: 23}} onPress={()=>navigation.navigate("customerDebts")}>More screens</Text>

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
    },
    signIn2: {
        width: '60%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: -22
    },
})