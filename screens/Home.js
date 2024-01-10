import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NasaInfo from '../components/NasaInfo';

export default function Home({navigation}) {


    return (
        <SafeAreaView style={{flex: 1}}>
       <ScrollView>
        <View style={styles.container}>
            <NasaInfo/>
        </View>
       </ScrollView>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
