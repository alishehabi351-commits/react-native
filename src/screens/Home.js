import React from 'react'
import { Text, StyleSheet, View, Button, Pressable , Image} from 'react-native'
import Swiper from 'react-native-swiper';


const Home = ({navigation}) => {
    const openAbout = () => {
        navigation.navigate('About');
    };

    return(
            
        <View style={styles.container}> 
            <View style={styles.sliderContainer}>
                <Swiper 
                autoplay
                autoplayTimeout={5}
                activeDotColor='#22D4FF'
                loop={true}>

                    <View style={styles.item}>
                        <Image
                        source={require("../../assets/mc1.jpeg")}
                        style={styles.imgItem}
                        resizeMode='contain'
                        ></Image>
                    </View>

                    <View style={styles.item}>
                        <Image
                        source={require("../../assets/mc2.jpeg")}
                        style={styles.imgItem}
                        resizeMode='contain'
                        ></Image>
                    </View>

                    <View style={styles.item}>
                        <Image
                        source={require("../../assets/mc3.jpeg")}
                        style={styles.imgItem}
                        resizeMode='contain'
                        ></Image>
                    </View>

                    <View style={styles.item}>
                        <Image
                        source={require("../../assets/mc4.jpeg")}
                        style={styles.imgItem}
                        resizeMode='contain'
                        ></Image>
                    </View>
                </Swiper>
            </View>

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

    sliderContainer: {
        width: "90%",
        height: "100%",
        justifyContent: 'center',
        alignSelf: 'center',        
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden'


    },

    item:{
        flex: 1,
        justifyContent: 'center'

    },

    imgItem:{
        width: '100%',
        height: '100%',
        borderRadius: 8
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
    },

    
});
export default Home;
