import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [numero, setNumero] = useState(0);
  const [toinenNumero, setToinenNumero] = useState(0);
  const [tulos, setTulos] = useState(0);
  const [historys, setHistorys] = useState([]);
  const [error, setError] = useState("");

  const buttonPressed = (merkki) => {
    const num1 = parseFloat(numero);
    const num2 = parseFloat(toinenNumero);

    if (isNaN(num1) || isNaN(num2)) {
      setError("Vain numeroita kiitos")
      return
    }
    setError("")
    let calculation;
    if (merkki === "+") {
      setTulos((num1 + num2).toString());
      calculation = num1 + " " + merkki + " " + num2 + " = " + (num1 + num2);
    }
    else if (merkki === "-") {
      setTulos((num1 - num2).toString());
      calculation = num1 + " " + merkki + " " + num2 + " = " + (num1 - num2);
    }
    setNumero("")
    setToinenNumero("")

    setHistorys([...historys, calculation]);
  }

  return (
    <View style={styles.container}>
      <Text>{error}</Text>
      <Text>Result: {tulos}</Text>

      <TextInput
        style={styles.inputs}
        placeholder='Numero tähän'
        onChangeText={numero => setNumero(numero)}
        value={numero}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder='Toinen numero tähän'
        onChangeText={toinenNumero => setToinenNumero(toinenNumero)}
        value={toinenNumero}
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <Button

          onPress={() => buttonPressed("+")} title="+" />
        <Button

          onPress={() => buttonPressed("-")} title="-" />

      </View>
      <Text>History</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={historys}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListEmptyComponent={<Text>No calculation</Text>}
        inverted
      />
      <StatusBar style="auto" />
    </View>
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
    gap: 20
  },
  inputs: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },


});
// Otin mallia https://www.geeksforgeeks.org/build-a-calculator-using-react-native/