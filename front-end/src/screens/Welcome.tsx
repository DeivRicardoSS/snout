import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/styles';
export function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.background,
        flex: 1
    }
});