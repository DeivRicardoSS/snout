import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { ChatCircleIcon } from 'phosphor-react-native';

interface RequestCardProps {
    img: any;
    name: string;
    description: string;
}
export function RequestCard({ img, name, description }: RequestCardProps) {
    return (
        <View style={styles.request}>
            <View style={styles.requestInfo}>
                <Image style={styles.requestImg} source={img} />
                <View style={{ gap: 5 }}>
                    <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                    <Text>{description}</Text>
                </View>
            </View>
            <ChatCircleIcon size={32} color="#000" weight='fill' />
        </View>
    );
}

const styles = StyleSheet.create({
    request: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#dedede',
    },
    requestImg: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    requestInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
});