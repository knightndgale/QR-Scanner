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
  


  // Pass Bet Data Here
  const [betNumber, setBetNum] = useState('')
  const [betAmount, setBetAmount] = useState('')
  // Pass Bet Data Here


  


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


   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
       
          {/* <View style={styles.appHeader}>
            <DefaultHeader />
          </View> */}
         
          <View style={styles.tableHeaderStyle}>
                  {/* /, {paddingHorizontal: {landscape} ? 40 : 15} */}
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>ID</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>Bet Date</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>Time</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>Doc No.</Text>
          </View>

          <View style={globalStyles.tableItemWrapper}>
                    <Text style={globalStyles.tableText}>123-1234</Text>
                    <Text style={globalStyles.tableText}>1/19/2022</Text>
                    <Text style={globalStyles.tableText}>11:59 AM</Text>
                    <Text style={globalStyles.tableText}>1</Text>
                    
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
    // marginHorizontal: 7,
    // marginTop: 7,
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