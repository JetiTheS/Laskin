import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function History({ route }) {
    const { historys } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.header}>History</Text>
            <FlatList
                keyExtractor={(item, index) => index}
                data={historys}
                renderItem={({ item }) => <Text>{item}</Text>}
                ListEmptyComponent={<Text>No calculation</Text>}
            />
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

    header: {
        fontSize: 25
    },

});