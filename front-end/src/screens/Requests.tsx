import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { ChatCircleIcon } from 'phosphor-react-native';
import { RequestCard } from '../components/RequestCard';
import globalStyles from '../styles/styles';
export function Requests() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.container}>
                    <RequestCard
                        img={require('../../assets/gato-joia.gif')}
                        name="Gato Joinha"
                        description="ONG Pets 24h"
                    />

                    <RequestCard
                        img={require('../../assets/fred.jpg')}
                        name="Fred"
                        description="ONG Pets 24h"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.background,
        flex: 1,
    },
});