import ButtomTab from './Components/navigation';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Components/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ButtomTab' component={ButtomTab} options={{headerShown : false}}/>
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;