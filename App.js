import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [numero, setNumero] = useState("");
  const [toinenNumero, setToinenNumero] = useState("");
  const [tulos, setTulos] = useState("");


  const buttonPressed = (merkki) => {
    const num1 = parseFloat(numero);
    const num2 = parseFloat(toinenNumero);

    if (merkki === "+") {
      setTulos((num1 + num2).toString());
      setNumero("")
      setToinenNumero("")
    }
    else if (merkki === "-") {
      setTulos((num1 - num2).toString());
      setNumero("")
      setToinenNumero("")
    }
  }

  return (
    <View style={styles.container}>
      <Text>Result: {tulos}</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder='Numero tähän'
        onChangeText={numero => setNumero(numero)}
        value={numero}
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder='Toinen numero tähän'
        onChangeText={toinenNumero => setToinenNumero(toinenNumero)}
        value={toinenNumero}
        keyboardType="numeric"
      />
      <View style={{

        flexDirection: "row",
        paddingVertical: 10,
        gap: 20
      }}>
        <Button

          onPress={() => buttonPressed("+")} title="+" />
        <Button

          onPress={() => buttonPressed("-")} title="-" />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
// Otin mallia https://www.geeksforgeeks.org/build-a-calculator-using-react-native/