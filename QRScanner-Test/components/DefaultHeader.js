import { Appbar } from 'react-native-paper';
import { Platform, View,StyleSheet, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const MainHeader = () => (
    <Appbar.Header>
        <View tyle={styles.Right}>

        </View>
        <View style={styles.Right}>
            <Text style={globalStyles.titleText}>Main Menu</Text>
            
        {/*  Appbar from React Native Paper Example
        
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
        </View>

        <View style={styles.Left}>
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
        </View>
    </Appbar.Header>
    
);

const styles = StyleSheet.create({
    Right:  {
        flex: 1,
        width: '50%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
  
    Left:   {
        flex: 1,
        width: '50%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
  
  });

export default MainHeader;


//    {/* HEAD */}
//    <View style={styles.appHeader}>
//    <DefaultHeader />
//   </View>

//   {/* HEAD */}

//   {/* Body */}

//   {/* Body */}

//   {/* Footer */}
//   <View style={styles.appFooter}>
//     <Text>vs {expo.version}</Text>
//   </View>
//   {/* Footer */}