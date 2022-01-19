import {createStackNavigator} from 'react-navigation-stack';
import {createAppCOntainer} from 'react-navigation';
import NewBet from '../screens/NewBet';
import BetCancel from '../screens/BetCancel';
import Claim from '../screens/Claim';
import HitReport from '../screens/HitReports';
import History from '../screens/History';
import Menu from '../screens/MainMenu';

// const screenName = (prop) => {
//     const newScreen = prop.screenName;
//     console.log({newScreen});

 
// }

const screens = {
   
        // NewBet: {
        //     screen: NewBet
        // },

        // Menu: {
        //     screen: Menu
        // },
       
       
    

}

const NewBetStack = createStackNavigator(screens);

export default createAppCOntainer(NewBetStack);

// export {screenName}