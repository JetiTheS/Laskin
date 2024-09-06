import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function Calculator({ navigation }) {
    const [number, setNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);
    const [historys, setHistorys] = useState([]);
    const [error, setError] = useState("");

    const buttonPressed = (character) => {
        const num1 = parseFloat(number);
        const num2 = parseFloat(secondNumber);

        if (isNaN(num1) || isNaN(num2)) {
            setError("Only number please")
            return
        }
        setError("")
        let calculation;
        if (character === "+") {
            setResult((num1 + num2).toString());
            calculation = num1 + " " + character + " " + num2 + " = " + (num1 + num2);
        }
        else if (character === "-") {
            setResult((num1 - num2).toString());
            calculation = num1 + " " + character + " " + num2 + " = " + (num1 - num2);
        }
        setNumber("")
        setSecondNumber("")

        setHistorys([calculation, ...historys]); //Uusin tulee ensin kun calculation on eka
    }

    return (
        <View style={styles.container}>
            <Text>{error}</Text>
            <Text style={styles.header}>Result: {result}</Text>

            <TextInput
                style={styles.inputs}
                placeholder='Number here'
                onChangeText={number => setNumber(number)}
                value={number}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.inputs}
                placeholder='Second number here'
                onChangeText={secondNumber => setSecondNumber(secondNumber)}
                value={secondNumber}
                keyboardType="numeric"
            />
            <View style={styles.button}>
                <Button

                    onPress={() => buttonPressed("+")} title="+" />
                <Button

                    onPress={() => buttonPressed("-")} title="-" />
                <Button
                    title='History'
                    onPress={() => navigation.navigate("History", { historys })}
                />

            </View>

            <StatusBar style="auto" />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        flexDirection: "row",
        paddingVertical: 10,
        gap: 10,

    },
    inputs: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    header: {
        fontSize: 25
    },

});