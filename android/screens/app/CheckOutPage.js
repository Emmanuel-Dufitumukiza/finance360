import React,{useState} from 'react'
import { ScrollView,Text,View,Image,StyleSheet,TouchableOpacity,TextInput,Button  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from "react-native-modal";

export default CheckOutPage = ({navigation})=>{
 
    const [partialPayment, setPartialPayment] = useState(true);
    const [checked, setChecked] = React.useState('first');
    
    const fullPayment = ()=>{
        setPartialPayment(false)
    }

    const partialPayments = ()=>{
        setPartialPayment(true)
    }

    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    
    const radioButtonsData = [
        {
          id: '1',
          label: 'MoMo',
          value: 'MoMo',
          color: 'black',
          selected: false,
        },
        {
          id: '2',
          label: 'Bank Transfer',
          value: 'Bank Transfer',
          color: 'black',
          selected: false,
        },
            {
          id: '3',
          label: 'Cash',
          value: 'Cash',
          color: 'black',
          selected: false,
        },
        {
          id: '4',
          label: 'Others',
          value: 'Others',
          color: 'black',
          selected: false,
        }
    ];

    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    // const [radioButtons2, setRadioButtons] = useState(radioButtonsData);
    
    const onPressRadioButton = radioButtonsArray => {
        console.log(radioButtonsArray);
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
             <Text onPress={()=>navigation.navigate("bottomNav")} style={{backgroundColor: "black",color: "#fff",borderRadius: 10,paddingLeft: 20,paddingRight: 20,paddingTop: 5,paddingBottom: 5}}>
                 Cancel
             </Text>
        </LinearGradient>
        </TouchableOpacity>
                </View>
         </View>

         <View style={{justifyContent: 'center',alignItems: "center",marginTop: -15}}>
            <Text style={{fontSize: 24,color: "#FFF",fontWeight: "bold"}}>Checkout</Text>
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
        <View style={{flexDirection: "row"}}>
    <TouchableOpacity
                style={[styles.signIn2]}
                onPress={()=>{partialPayments()}}
            >
            <LinearGradient
                colors={['#9D0F0F', '#9D0F0F']}
                style={styles.signIn2}
            >
                <Text style={[styles.textSign, {
                    color:'#fff'
                }]}>Partial Payment</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.signIn2]}
                onPress={()=>{fullPayment()}}
            >
            <LinearGradient
                colors={['#828282', '#828282']}
                style={styles.signIn2}
            >
                <Text style={[styles.textSign, {
                    color:'#fff'
                }]}>Full Payment</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>

{
    partialPayment?
    <View style={{flexDirection: "row",marginTop: 15}}>
    <View style={[styles.input]}>
            <TextInput 
                placeholder="Amount Paid"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
            />
    </View>

    <View style={[styles.input,{position: "absolute",right: 0}]}>
            <Text style={styles.textInput}>RWF</Text>
    </View>
    </View>

    :
    <Text>{null}</Text>
}


<View><Text style={{alignSelf: "center",fontSize: 19,fontWeight: "bold",marginTop: 25,marginBottom: 15}}>Payment Method</Text></View>


<View>
<RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />

<View style={{marginBottom: 25,marginTop: 40}}>
    <Text style={{color: "#A5A5A5",fontSize: 17}}>Customer Name (Optional)</Text>
    <TextInput   placeholderTextColor="black"
                    style={styles.textInput2}
                    autoCapitalize="none"></TextInput>
    </View>

    <View>
    <Text style={{color: "#A5A5A5",fontSize: 17}}>Momo Number</Text>
    <TextInput   placeholderTextColor="black"
                    style={styles.textInput2}
                    autoCapitalize="none"></TextInput>
    </View>

    <View style={{justifyContent: "center",alignItems: "center",marginBottom: 20,marginTop: 35}}><Text style={{fontSize: 18, color: "#05F200",fontWeight: "bold"}}>Payment Deadline</Text></View>

    </View>

    <Modal animationType = {"slide"} isVisible={isModalVisible}>
        <View style={{ flex: 1}}>
          <View style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",borderRadius: 5,
            height: "auto",backgroundColor: "#ffff",paddingTop: 30,paddingBottom: 30,marginTop: 40 }}>

            <Text style={{fontWeight: "bold",fontSize: 18,borderBottomColor: "black",borderBottomWidth: 1}}>Sales Verification</Text> 
              <Text style={{fontSize: 18,marginTop: 25,marginBottom: 15}}>Upload Proof of Received Payment</Text>
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

            <TouchableOpacity
                    style={styles.signIn}
                    onPress={toggleModal}
                    // onPress={()=>navigation.navigate("bottomNav")}
                >
                <LinearGradient
                    colors={['#FF7518', '#FF7518']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>VERIFY SALES</Text>
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
    textInput2: {
        fontSize: 20,
        color: "black",
        borderBottomWidth: 1,
        borderBottomColor: "#FF7518",
        paddingBottom: 8,
        textAlign:'right'
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
    signIn2: {
        width: '60%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: -22
    },
})