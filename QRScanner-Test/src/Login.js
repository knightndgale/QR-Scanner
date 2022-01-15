
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';


const LoginScreen = ({navigation}) => {

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text>Login Screen</Text>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },


});
