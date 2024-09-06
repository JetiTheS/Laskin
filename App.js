import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from "./screens/History"
import Calculator from './screens/Calculator';


export default function App() {
  const Navi = createNativeStackNavigator();



  return (

    <NavigationContainer>
      <Navi.Navigator>
        <Navi.Screen name="Calculator" component={Calculator} />
        <Navi.Screen name="History" component={History} />
      </Navi.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  button: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 20,

  },
  inputs: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  header: {
    fontSize: 25
  }

});
// Otin mallia https://www.geeksforgeeks.org/build-a-calculator-using-react-native/