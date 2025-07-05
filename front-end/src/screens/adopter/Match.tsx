import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../../styles/styles';
export function Match() {
    return (
        <View style={styles.container}>
            <Text>Match</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.background,
        flex: 1
    }
});