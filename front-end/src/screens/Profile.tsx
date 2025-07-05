import { View, Text, StyleSheet, Image, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import globalStyles from '../styles/styles';
export function Profile() {
    return (
        <View>

            <View style={styles.container}>
                <ImageBackground
                    style={styles.profileBackground}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm0P28OyCgn0AnneakT3JSbHL7ZJ3-wnTbw&s'}}
                >
                    <View style={styles.profileInfo}>
                        <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri: 'https://museudememes.com.br/wp-content/uploads/2022/05/sad-cat-1.jpg'}} />
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nome</Text>
                        <Text style={{fontSize: 16}}>Email</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.background,
        flex: 1
    },
    profileBackground: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    profileInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{translateY: 100}],
        gap: 10
    }
});