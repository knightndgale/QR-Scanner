
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, ScrollView} from 'react-native';
import { Provider as PaperProvider, Button, TextInput, DefaultTheme, Appbar } from 'react-native-paper';
import { useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import { Entypo, FontAwesome, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
import DefaultHeader from './components/DefaultHeader';
import { expo } from './app.json';
import { globalStyles } from './styles/global';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#15A3D9',
    accent: '#5172AA',
  },
};


export default function App() {

   return (

    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>

        <View style={styles.appHeader}>
         <DefaultHeader />
        </View>
        <View style={styles.menuHead}>
          <Image 
          style={{width: 120, height: 120}}
          resizeMode= 'contain'
          source={require('./assets/logo-test.png')}/>
          <Text>vs {expo.version}</Text>
        </View>

        <View style={styles.menuBody}>
        
          <View style={styles.box}>

              <View style={styles.boxButton}>

                <Entypo name="new-message" size={30}   color="black" />
                <View style={styles.buttonText}>
                  <Text style={globalStyles.paragraph}>New Bet</Text>
                </View>
                
              </View>
          </View>
          <View style={styles.box}>
              <View style={styles.boxButton}>

              <FontAwesome name="history" size={30}  color="black" />

                <View style={styles.buttonText}>
                  <Text style={globalStyles.paragraph}>History</Text>
                </View>

              </View>
          </View>

          <View style={styles.box}>
              <View style={styles.boxButton}>

                <MaterialIcons name="fact-check" size={30}  color="black" />
                <View style={styles.buttonText}>
                  <Text style={globalStyles.paragraph}>Hits</Text>
                </View>
              
              </View>
          </View>
           <View style={styles.box}>
              <View style={styles.boxButton}>

                <FontAwesome name="dollar" size={30} color="black" />
                <View style={styles.buttonText}>
                  <Text style={globalStyles.paragraph}>Claim</Text>
                </View>
                
              </View>
          </View>
          <View style={styles.box}>
              <View style={styles.boxButton}> 
                <MaterialIcons name="cancel-presentation" size={30} color="black" />    
                <View style={styles.buttonText}>
                  <Text style={globalStyles.paragraph}>Cancel Doc</Text>
                </View>

              </View>
          </View>

          <View style={styles.box}>
              <View style={styles.boxButton}>
                <MaterialCommunityIcons  name="point-of-sale" size={30} color="black" />
                <View style={styles.buttonText}>
                  <Text style={globalStyles.paragraph}>Sales</Text>
                </View>
              </View>
          </View>
          <View style={styles.box}>
              <View style={styles.boxButton}>
                <MaterialCommunityIcons   name="printer" size={30} color="black" />
                <View style={styles.buttonText}>
                <Text style={globalStyles.paragraph}>Setup Printer</Text>
                </View>
              </View>
          </View>
        
        </View>

      </SafeAreaView>
       
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      
  },
  appHeader:{
    width: '100%',
 
  },

  menuHead: {
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#1534',
      width: '100%',
 
      paddingVertical: 15,
  },

  menuBody: {

  borderTopWidth: 2,
  borderTopColor: '#eee',
  paddingTop: 10,
  paddingHorizontal: 15,
  
  width: '100%',
  height: '70%',
  flexDirection: 'row',
  flexWrap: 'wrap',
},

box: {
  width: '33%',
  height: '25%',
  padding: 4,
  

},

buttonText: {
  paddingTop: 10,
},

boxButton: {

  flex: 1,
  borderWidth: 1,
  borderRadius: 10,
  borderColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',

  
},

appFooter: {
},


});
