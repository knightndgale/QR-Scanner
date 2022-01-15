
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { userDimensions, useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {
  const DeviceOrientation = useDeviceOrientation();
  const Dimension = userDimensions();

  
   return (
    //  Home
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
            {/* <LoginScreen /> */}
        </View>
      </SafeAreaView>
       
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
