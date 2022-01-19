import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';


const tableItem = (props) => {
    return (
        <View style={styles.tableItem}>
            {/* , {paddingHorizontal: landscape ? 50 : 8}] */}
                <Text style={globalStyles.tableText}>{props.text}</Text>
                {/* <Text style={[globalStyles.tableText, {paddingHorizontal: landscape ? 50 : 8}]}>Bet Amount</Text>
                <Text style={[globalStyles.tableText, {paddingHorizontal: landscape ? 50 : 8}]}>Win Amount</Text>
                <Text style={[globalStyles.tableText, {paddingHorizontal: landscape ? 50 : 8}]}>Draw</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({

    
});

export {tableItem};