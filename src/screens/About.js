import React from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'

const About = ({navigation}) => {
    const openHome = () => {
        navigation.navigate('Home');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.emoji}>ℹ️</Text>
            <Text style={styles.title}>About Screen</Text>
            <Text style={styles.description}>Welcome to the about screen of our windows application</Text>
            <Pressable style={styles.button} onPress={openHome}>
                <Text style={styles.btnText}>Go to Home</Text>
            </Pressable>
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
export default About;
