import React, { useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,  FlatList, TextInput, Pressable, Modal} from 'react-native';
import { Provider as PaperProvider,  DefaultTheme, Button } from 'react-native-paper';
import {  Entypo } from '@expo/vector-icons';
import DefaultHeader from '../sharedComponents/DefaultHeader';
import { globalStyles } from '../styles/global';
import {ModalPicker} from '../component/ModalPicker';
import TableItemGenerator from '../component/tableItemGenerator';

import { useDeviceOrientation} from "@react-native-community/hooks";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#ABDFEA',
    accent: '#5172AA',
  },
};

export default function App() {

  




  // To make the table header responsive to device orientation
  const { landscape } = useDeviceOrientation();
  // To make the table header responsive to device orientation
  

  
  // Pass User Data Here
  const [userDetail] = useState (
    {name: 'Joan', area: 'Balabagan10'}
  );
  // Pass User Data Here
 
  // Pass Bet Data Here
  const [betNumber, setBetNum] = useState('')
  const [betAmount, setBetAmount] = useState('')
  // Pass Bet Data Here


  // Pass and Get TimeSlot Data Here

  //WARNING: SET USE STATE TO THE FIRST TIMESLOT AVAILABLE FOR THE REST OF THE DAY
  const [selectedTimeSlot, setTimeSlot] = useState('9S');
  const [isModalVisible, setisModalVisble] = useState(false);
  //WARNING: SET USE STATE TO THE FIRST TIMESLOT AVAILABLE FOR THE REST OF THE DAY
  
  //MODAL FOR PICKER
    const changeModalVisiblity = (bool) => {
      setisModalVisble(bool)
    }

    const setChosenTimeSlot = (option) => {
      setTimeSlot(option)
    }

  //MODAL FOR PICKER


   // Append New Bet Number, Amount and Time Slot
  const [betInfo, setBetInfo] = useState([
    {betNum:'123', betAmt:'10', winAmt:'2000', selectedTS:'9S', key:'1'},
    {betNum:'23', betAmt:'5', winAmt:'1000', selectedTS:'11S', key:'2'},
    {betNum:'251', betAmt:'100', winAmt:'500', selectedTS:'9S', key:'3'}])
   const appendBet = () =>{

     if(betAmount === '' && betNumber === '')
     {
         Alert.alert("WARNING!", "Please fill required fields!");
     }
     else{
      Alert.alert("CONGRATS!");
     }
   }
 
   // Append New Bet Number, Amount and Time Slot

  // Pass and Get TimeSlot Data Here



  // WARNING ***
  // CHANGE DEVICE DATE TIME TO SERVER OR ONLINE DATE TIME
  // TO AVOID DATE AND TIME CHEATING
  const [currentDate, setCurrentDate] = useState('')
  const [curentTime, setCurrentTime] = useState('')

  useEffect(() => {
    // DATE ex: 1/25/2022
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    // TIME ex: 1:54 PM
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var suffix = hours >= 12 ? "PM" : "AM";
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var timeNow = ((hours + 11 ) % 12 + 1 + ":"+ minutes +" "+suffix  )
   
    setCurrentDate(
      month+'/'+date+'/'+year
    )
    setCurrentTime(
      timeNow
    )

    
  }, [])
  

  // WARNING ***
  // CHANGE DEVICE DATE TIME TO SERVER OR ONLINE DATE TIME
  // TO AVOID DATE AND TIME CHEATING
  

  // CREATE DATE AND TIME TICKER AND GET IT FORM THE SERVER

  //   console.log("Bet Number"+ {betNumber});
  //   //Get Bet Number and Amount and Set it
  //   // Insert to DB + ticket #
  //   // Append for multiple lines of Bet Number and Amount
  // 



   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
       
          {/* <View style={styles.appHeader}>
            <DefaultHeader />
          </View> */}
          <View style={styles.appHeaderUser}>
             
                  <View style={styles.nameDate}>
                    <Text style={globalStyles.paragraph}>{userDetail.name}</Text>
                  </View>
                  <Entypo name="dots-two-vertical" size={15} style={{paddingRight: 10}} color="black" />
                  <View style={styles.areaTime}>
                    <Text style={globalStyles.paragraph}>{userDetail.area}</Text>
                  </View>
    
          </View>
          <View style={styles.appHeaderDateTime}>
             
                  <View style={styles.nameDate}>
                    <Text style={globalStyles.paragraph}>{currentDate}</Text>
                  </View>
                  <View style={styles.areaTime}>
                    <Text style={globalStyles.paragraph}>{curentTime}</Text>
                  </View>
          </View>
          <View style={styles.inputContainer}>        
            <TextInput keyboardType='number-pad' value={betNumber}   onChangeText={betNumber => setBetNum(betNumber)}   maxLength={3} style={globalStyles.textInput}  placeholder='Bet Number'/>
            <TextInput keyboardType='number-pad' value={betAmount}   onChangeText={betAmount => setBetAmount(betAmount)}     style={globalStyles.textInput} placeholder='Bet Amount'  />
          


            <Pressable style={styles.pickerStyle}
            onPress={() => changeModalVisiblity(true)}>
              <Text style={styles.pickerTextStyle}>{selectedTimeSlot}</Text>
              <Entypo name="triangle-down" size={15} style={{paddingRight: 10}} color="#1F1F1F" />
            </Pressable>

           <Button mode="contained" onPress={() => console.log(appendBet())}> Append </Button>

           <Modal
              transparent={true}
              animationType='fade'
              visible={isModalVisible}
              onRequestClose={()=> changeModalVisiblity(false)}
              >
                <ModalPicker 
                changeModalVisiblity={changeModalVisiblity}
                setChosenTimeSlot={setChosenTimeSlot}/>

            </Modal>
          </View>
          <View style={globalStyles.horizontalLine} />
          <View style={styles.tableHeaderStyle}>
                  {/* /, {paddingHorizontal: {landscape} ? 40 : 15} */}
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Bet Number</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Bet Amount</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Win Amount</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Draw</Text>
          </View>
          <View style={{marginHorizontal: 7}}> 
            <View style={globalStyles.tableItemWrapper}>

                {/* <FlatList
                  numColumns={3}
                  data={betInfo}
                  renderItem={({item, index}) => (
                    <View >
                      <Text style={globalStyles.tableText}>{item.betNum}</Text>
                      <Text style={globalStyles.tableText}>{item.betAmt}</Text>
                      <Text style={globalStyles.tableText}>{item.winAmt}</Text>
                      <Text style={globalStyles.tableText}>{item.selectedTS}</Text>
                    </View>
                    // <Text style={globalStyles.tableText}>{item.betAmt}</Text>

                  )}
                  
                /> */}
                      <Text style={globalStyles.tableText}>123</Text>
                      <Text style={globalStyles.tableText}>100</Text>
                      <Text style={globalStyles.tableText}>2000</Text>
                      <Text style={globalStyles.tableText}>11S</Text>
                      
            </View>
          </View>
    
      

        </SafeAreaView>
          
      </PaperProvider>
      
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appHeader:{
    width: '100%',
  },

  buttonStyle: {
    marginTop:10,
  },

  tableHeaderStyle: {
    marginHorizontal: 7,
    marginTop: 7,
    backgroundColor: '#4d4b4b',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  pickerStyle:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,   
  },

  pickerTextStyle:{
    fontSize: 18,
  },  

  appHeaderUser: {
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 10,
      backgroundColor: '#15A3D9',
  },
  inputContainer:{
    paddingHorizontal: 10,
  },

  appHeaderDateTime: {
    // alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,

    marginTop: 1,
    backgroundColor: '#949494',
},


  nameDate: {
    width: '50%',
    paddingLeft: 20,
  },

  areaTime: {
    width: '50%',

  },

  appFooter: {
  },


});