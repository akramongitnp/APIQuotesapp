import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Components/main'
import Test from './Components/test'
import Login from './Components/login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Funware'>
        <Stack.Screen name='Funware' component={Main}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Test' component={Test}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;