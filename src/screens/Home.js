import React from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'
import Swiper from 'react-native-swiper';


const Home = ({navigation}) => {
    const openAbout = () => {
        navigation.navigate('About');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.emoji}>🏠</Text>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.description}>Welcome to the home screen of our windows application</Text>
            <Pressable style={styles.button} onPress={openAbout}>
                <Text style={styles.btnText}>Go to About</Text>
            </Pressable>

            <Button
            title="Open Menu"
            onPress={()=> navigation.openDrawer()}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emoji: {
        fontSize: 50,
        fontWeight: 'bold',   
        color: "#0f172a"
    },  
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        maxWidth: 320,

    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
export default Home;
