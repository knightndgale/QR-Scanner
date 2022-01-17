
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,  FlatList, Pressable, } from 'react-native';
import { Provider as PaperProvider,  DefaultTheme, TextInput } from 'react-native-paper';
import { useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import {  Entypo } from '@expo/vector-icons';
import DefaultHeader from './sharedComponents/DefaultHeader';
import { expo } from './app.json';
import { globalStyles } from './styles/global';

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

  // Pass Data Here
  const [userDetail] = useState (
    {name: 'Joan', area: 'Balabagan10'}
  );
  // Pass Data Here
  
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
    var timeNow = ((hours + 11 ) % 12 + 1 + ":"+ ('0'+ minutes).toString() +" "+suffix  )
   
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
  
   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          {/* Header Testing */}
          <View style={styles.appHeader}>
            <DefaultHeader />
            {/* <Text style={globalStyles.paragraph}>{user.name}</Text> */}
          </View>
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
          <View>        
            <TextInput  label="Username"  />
            <TextInput  label="Password"  />
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

  appHeaderUser: {
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 10,
      backgroundColor: '#15A3D9',
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
        // backgroundColor: '#1194',

  },

  appFooter: {
  },


});