
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function App() {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
        
    })()
  }

  // Request camera persmission!
  useEffect(()=> {
    askForCameraPermission();
  }, [])

  // Event when scanning bar code
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    console.log('Type:'+type+'\nData:' + data)
  }
  // test git
  // Check permissions and return the screens
  if (hasPermission == null){
    return(
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }

  if(hasPermission == false){
    return(
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission} />
      </View>
    )
  }



  return (
      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={styles.headline}>Place the QR code inside the area!</Text>
          <Text style={styles.subheadline}>Scan will start automatically</Text>
        </View>
        <View style={styles.QRcontainer}>
          <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{height: 350, width: 350}}/>
        </View>
        
      
        {/* <View style={styles.bContainer}> */}
          <Text style={styles.mainText}>{text}</Text>
          {scanned && <Button  title={'Tap to Scan Again'} onPress={() => setScanned(false) } />}
        {/* </View> */}


      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextContainer: {
    margin: 10,
    alignItems: 'center'
  },

 

  headline: {
    fontSize: 15,
    
  },

  subheadline: {
    color: '#A5A8AC',
    marginBottom: 10,
  },

  QRcontainer: {
    margin: 20,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 30,
    
  },

  mainText: {
    marginTop: 15
  }




});
