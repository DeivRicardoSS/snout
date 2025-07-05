import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import globalStyles from '../../styles/styles';
import { SavedPetCard } from '../../components/SavedPetCard';
export function Saved() {
    return (
        <SafeAreaView style={styles.container}>
            <SavedPetCard 
                img={{uri: 'https://museudememes.com.br/wp-content/uploads/2022/05/sad-cat-1.jpg'}} 
                name="Gato Joia" 
                description="ONG Pets 24h"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.background,
        flex: 1
    }
});