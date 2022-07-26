import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './login';
import Main from './main';
import Settings from './settings';
import Reels from './reels';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

function ButtomTab() {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Feed' component={Main} options={{
                headerShown : false, 
                tabBarIcon: () => {return <Icon name='aperture' size={20}/>}
            }}/>
            <Tab.Screen name='Reels' component={Reels} options={{
                headerShown : false,
                tabBarIcon: () => {return <Icon name='play-circle' size={20}/>}
            }}/>
            <Tab.Screen name='Setting' component={Settings} options={{
                headerShown : false,
                tabBarIcon: () => {return <Icon name='settings' size={20}/>}
            }}/>
        </Tab.Navigator>
    );
}

export default ButtomTab;